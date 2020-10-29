import requests

from ..strategy import ShowStrategy
from .showTransformer import ShowResponseToModelTransformer
from FilmManager.settings import OMDB_API_KEY


class OMDBServiceException(Exception):
    pass


class OMDBApiService(object):
    api_url = f'http://www.omdbapi.com/?i=tt3896198&apikey={OMDB_API_KEY}'
    strategy = ShowStrategy

    def __init__(self):
        self.existing_names = list(self.strategy.get_objects().values_list(
            'title', flat=True))

    def _get_response(self, params):
        try:
            response = requests.get(self.api_url, params=params)
        except OMDBServiceException:
            return {}

        return {
            'success': response.status_code == 200,
            'data': response.json()
        }

    def _search_item(self, search_item='') -> dict:
        response = self._get_response({'s': search_item, 'page': 1})
        if response['success']:
            if response['data'].get('Error'):
                return {}
            return response['data']
        else:
            return {}

    def _get_item_details(self, title, release_year) -> dict:
        response = self._get_response(
            params={'t': title, 'y': release_year, 'plot': 'full'})

        if response['success']:
            return response['data']
        else:
            return {}

    def _filter_found_results(self, found_results: list):
        return [item for item in found_results
                if item['Title'] not in self.existing_names]

    def add_new_items(self):
        characters = [chr(i) for i in range(ord('a'), ord('z') + 1)]

        available_search_items = []
        for i in characters:
            for j in characters:
                for k in characters:
                    available_search_items.append(f'{i}{j}{k}')

        del characters

        for search_item in available_search_items:
            found_results = self._search_item(search_item=search_item)
            if found_results:
                new_items = self._filter_found_results(
                    found_results['Search'])

                if new_items:
                    self._save_results(new_items)

    def _save_results(self, items: list):
        for item in items:
            show_full_info = self._get_item_details(
                title=item['Title'], release_year=[item['Year']]
            )
            if show_full_info:
                transformer_obj = ShowResponseToModelTransformer(
                    show_full_info)
                self.existing_names.append(transformer_obj.get_title())
                self.strategy().create(
                    show_info=transformer_obj.get_general_info(),
                    actors_info=transformer_obj.get_actors_list(),
                    genres_info=transformer_obj.get_genres_list()
                )

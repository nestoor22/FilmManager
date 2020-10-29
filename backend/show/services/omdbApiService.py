import requests

from show.models import Shows
from .showTransformer import ShowResponseToModelTransformer
from FilmManager.settings import OMDB_API_KEY


class OMDBApiService(object):
    api_url = f'http://www.omdbapi.com/?i=tt3896198&apikey={OMDB_API_KEY}'
    model = Shows

    def __init__(self):
        self.existing_names = self.model.objects.all().values_list(
            'title', flat=True)

    def _get_response(self, params):
        response = requests.get(self.api_url, params=params)

        return {
            'success': response.status_code == 200,
            'data': response.json()
        }

    def _search_item(self, search_item=''):
        response = self._get_response({'s': search_item, 'page': 1})
        if response['success']:
            return response['data']
        else:
            return None

    def _get_item_details(self, title, release_year):
        response = self._get_response(
            params={'t': title, 'y': release_year, 'plot': 'full'})

        if response['success']:
            return response['data']
        else:
            return None

    def _filter_found_results(self, found_results):
        return [item for item in found_results
                if item['title'] not in self.existing_names]

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
            new_items = self._filter_found_results(found_results['Search'])
            if new_items:
                self._save_results(new_items)

    def _save_results(self, items):
        items_to_save = []

        for item in items:
            show_full_info = self._get_item_details(
                title=item['Title'], release_year=[item['Released']]
            )
            if show_full_info:
                items_to_save.append(
                    ShowResponseToModelTransformer(
                        show_full_info
                    ).transform_general_info())

        self.model.objects.bulk_create(items_to_save)

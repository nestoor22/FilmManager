from .list_strategy import ListStrategy
from .board_strategy import BoardStrategy


def get_strategy(collection_type):
    if collection_type == 'list':
        return ListStrategy
    elif collection_type == 'board':
        return BoardStrategy


class CollectionsContext(object):
    def __init__(self, collection_type, collection_data=None, user_id=None):
        self._strategy = get_strategy(collection_type)(
            data=collection_data,
            user_id=user_id
        )

    def create(self):
        self._strategy.create()

    def update(self):
        self._strategy.update()

    def delete(self):
        self._strategy.delete()

    def get_followed_collections(self):
        return self._strategy.get_followed_collections()

    def get_user_collections(self):

        return self._strategy.get_user_collections()

    def get_filtered_collections(self, user_followed_collections, filters):
        return self._strategy.get_filtered_collections(
            user_followed_collections=user_followed_collections,
            filters=filters
        )

    def get_all_collections(self):
        return self._strategy.get_all_existing_collections()

    def compute_average_show_rating(self, collection_id):
        return self._strategy.compute_average_show_rating(collection_id)

    def get_shows_number_in_collection(self, collection_id):
        return self._strategy.get_shows_number_in_collection(collection_id)

    def get_shows_elements_in_collection(self, collection_id):
        return self._strategy.get_shows_elements_in_collection(collection_id)

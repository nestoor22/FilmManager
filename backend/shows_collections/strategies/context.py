from .list_strategy import ListStrategy
from .board_strategy import BoardStrategy


def get_strategy(collection_type):
    if collection_type == 'list':
        return ListStrategy
    elif collection_type == 'board':
        return BoardStrategy


class CollectionsContext(object):
    def __init__(self, collection_type, collection_data):
        self.strategy = get_strategy(collection_type)(collection_data)

    def create(self):
        self.strategy.create()

    def update(self):
        self.strategy.update()

    def delete(self):
        self.strategy.delete()

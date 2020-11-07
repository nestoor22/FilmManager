from .base import BaseCollectionStrategy
from ..models import List


class ListStrategy(BaseCollectionStrategy):
    model = List

    def create(self):
        pass

    def update(self):
        pass

    def add_related_object(self, related_object_id):
        pass

    def add_members_to_collection(self, members_list):
        pass

    def compute_average_show_rating(self):
        pass

    def get_shows_number_in_collection(self):
        pass

    def get_filtered_collections(self):
        pass
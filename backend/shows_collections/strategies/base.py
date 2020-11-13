from abc import ABC, abstractmethod

from django.db.models import Q
from django.core.exceptions import ObjectDoesNotExist

from ..models import List, Board


class BaseCollectionStrategy(ABC):

    model = None

    def __init__(self, data=None, user_id=None):
        self.user_id = user_id
        self.collection_data = data
        self.collection_obj = None

    @abstractmethod
    def create_related_collection(self, collection_data: dict):
        raise NotImplemented()

    @abstractmethod
    def add_members_to_collection(self, members_list: list):
        raise NotImplemented()

    @abstractmethod
    def create(self):
        raise NotImplemented()

    @abstractmethod
    def update(self):
        raise NotImplemented()

    @abstractmethod
    def compute_average_show_rating(self, collection_id: int):
        raise NotImplemented()

    @abstractmethod
    def get_shows_number_in_collection(self, collection_id: int):
        raise NotImplemented()

    @abstractmethod
    def get_filtered_collections(
            self, user_followed_collections: list, filters: dict):
        raise NotImplemented()

    @abstractmethod
    def get_followed_collections(self):
        raise NotImplemented()

    @abstractmethod
    def get_all_existing_collections(self):
        raise NotImplemented()

    @abstractmethod
    def get_shows_elements_in_collection(self, collection_id):
        raise NotImplemented()

    def get_user_collections(self):
        return self.model.objects.filter(owner_id=self.user_id)

    def get_collection(self):
        try:
            return self.model.objects.get(id=self.collection_data['id'])
        except ObjectDoesNotExist:
            return {}

    def delete(self):
        return self.model.objects.filter(
            id=self.collection_data['id']
        ).delete()

    def prepare_filtered_query(
            self, filters: dict, get_followed_collections: bool
    ):
        filter_query = Q()

        min_followers, max_followers = self.get_min_max_values(
            filters.get("followers"))

        if get_followed_collections and self.user_id:
            if isinstance(self.model, List):
                filter_query &= Q(listfollowers__user_id=self.user_id)
                filter_query &= Q(is_outside_board=self.user_id)

            elif isinstance(self.model, Board):
                filter_query &= Q(boardfollowers__user_id=self.user_id)

        if len(filters.get("board_type", [])) == 1:
            filter_query &= Q(is_open=filters.get("board_type")[0] == "open")

        if filters.get("tags"):
            for tag in filters.get("tags"):
                filter_query |= Q(tags__icontains=tag)

        if filters.get("followers"):
            filter_query &= Q(
                followers__lte=max_followers,
                followers__gte=min_followers
            )

        return filter_query

    @staticmethod
    def get_min_max_values(values: list):
        return min(values), max(values)

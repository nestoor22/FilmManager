from abc import ABC, abstractmethod


class BaseCollectionStrategy(ABC):

    model = None

    def __init__(self, data):
        self.collection_data = data
        self.collection_obj = None

    @abstractmethod
    def add_related_object(self, related_object_id):
        raise NotImplemented()

    @abstractmethod
    def add_members_to_collection(self, members_list):
        raise NotImplemented()

    @abstractmethod
    def create(self):
        raise NotImplemented()

    @abstractmethod
    def update(self):
        raise NotImplemented()

    @abstractmethod
    def compute_average_show_rating(self):
        raise NotImplemented()

    @abstractmethod
    def get_shows_number_in_collection(self):
        raise NotImplemented()

    @abstractmethod
    def get_filtered_collections(self):
        raise NotImplemented()

    def delete(self):
        return self.model.objects.filter(
            id=self.collection_data['id']
        ).delete()

from .base import BaseCollectionStrategy
from ..models import Board, User, BoardFollowers


class BoardStrategy(BaseCollectionStrategy):
    model = Board

    def create(self):
        invited_members = self.collection_data.pop("invited_members", [])

        self.collection_obj = Board.objects.create(**self.collection_data)

        invited_members.append(self.collection_obj.owner.email)

        self.add_members_to_collection(invited_members)

        return self.collection_obj

    def update(self):
        pass

    def add_related_object(self, related_object_id):
        pass

    def add_members_to_collection(self, members_list):
        for member_email in set(members_list):
            try:
                user = User.objects.get(email=member_email.strip())
            except User.DoesNotExist:
                return

            BoardFollowers.objects.create(
                board_id=self.collection_obj.id,
                user_id=user.id,
                is_admin=True,
            )
        self.collection_obj.followers = BoardFollowers.objects.filter(
            board_id=self.collection_obj.id).count()

        self.collection_obj.save()

    def compute_average_show_rating(self):
        pass

    def get_shows_number_in_collection(self):
        pass

    def get_filtered_collections(self):
        pass
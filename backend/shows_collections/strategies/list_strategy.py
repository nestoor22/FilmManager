from django.db.models import Avg

from .base import BaseCollectionStrategy
from ..models import List, User, ListFollowers, ListShowRelation, Shows


class ListStrategy(BaseCollectionStrategy):
    model = List

    def create(self):
        invited_members = self.collection_data.pop("invited_members", [])

        self.collection_obj = List.objects.create(**self.collection_data)

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

            ListFollowers.objects.create(
                list_id=self.collection_obj.id,
                user_id=user.id,
                is_admin=True
            )

        self.collection_obj.followers = ListFollowers.objects.filter(
            list_id=self.collection_obj.id).count()

        self.collection_obj.save()

    def compute_average_show_rating(self, collection_id):
        shows_ids = ListShowRelation.objects.filter(
            list_id=collection_id).values_list('show_id', flat=True)

        average_shows_rating = Shows.objects.filter(
            show_id__in=shows_ids).aggregate(
            Avg("imdb_rating")
        )['imdb_rating__avg']

        return round(average_shows_rating or 0, 2)

    def get_shows_number_in_collection(self, collection_id):
        return ListShowRelation.objects.filter(list_id=collection_id).count()

    def get_filtered_collections(self, user_followed_collections, filters):
        result = []
        filters_query = self.prepare_filtered_query(
            filters=filters,
            get_followed_collections=user_followed_collections
        )

        min_shows_number, max_shows_number = self.get_min_max_values(
            filters.get("shows_number", [0, 999]))

        min_rating, max_rating = self.get_min_max_values(
            filters.get("rating", [0, 10]))

        filtered_boards = List.objects.filter(filters_query).order_by(
            "created_at")

        for board in filtered_boards:
            if (max_rating >= self.compute_average_show_rating(
                    board.id) >= min_rating):
                if (max_shows_number >= self.get_shows_number_in_collection(
                        board.id) >= min_shows_number):
                    result.append(board)

        return result

    def get_followed_collections(self):
        return self.model.objects.filter(listfollowers__user_id=self.user_id)

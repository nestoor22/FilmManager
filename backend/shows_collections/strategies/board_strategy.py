from django.db.models import Avg

from .base import BaseCollectionStrategy
from ..models import (
    Board, User, BoardFollowers, BoardLists, Shows, List, ListShowRelation
)


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

    def create_related_collection(self, collection_data):
        list_instance = List.objects.create(
            name=collection_data["list_name"],
            owner_id=self.user_id,
            is_outside_board=False
        )

        BoardLists.objects.create(
            board_id=collection_data["board_id"], list_id=list_instance.id)

        shows_on_list = []
        for show_id in collection_data["shows_on_list"]:
            shows_on_list.append(
                ListShowRelation(show_id=show_id, list_id=list_instance.id)
            )

        ListShowRelation.objects.bulk_create(shows_on_list)

        return list_instance

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

    def compute_average_show_rating(self, collection_id):
        board_lists = BoardLists.objects.filter(board_id=collection_id)
        shows_ratings = Shows.objects.filter(
            listshowrelation__list__boardlists__in=board_lists
        ).aggregate(Avg("imdb_rating"))

        return round(shows_ratings["imdb_rating__avg"] or 0, 2)

    def get_all_existing_collections(self):
        return self.model.objects.all().order_by('-created_at')

    def get_followed_collections(self):
        return self.model.objects.filter(boardfollowers__user_id=self.user_id)

    def get_shows_number_in_collection(self, collection_id):
        board_lists = BoardLists.objects.filter(board_id=collection_id)
        return Shows.objects.filter(
            listshowrelation__list__boardlists__in=board_lists
        ).count()

    def get_filtered_collections(self, user_followed_collections, filters):
        result = []
        filters_query = self.prepare_filtered_query(
            filters=filters,
            get_followed_collections=user_followed_collections,
        )

        min_shows_number, max_shows_number = self.get_min_max_values(
            filters.get("shows_number", [0, 999]))

        min_rating, max_rating = self.get_min_max_values(
            filters.get("rating", [0, 10]))

        filtered_boards = Board.objects.filter(filters_query).order_by(
            "created_at")

        for board in filtered_boards:
            if (max_rating >= self.compute_average_show_rating(
                board.id) >= min_rating
            ):
                if (max_shows_number >= self.get_shows_number_in_collection(
                    board.id) >= min_shows_number
                ):
                    result.append(board)

        return result

    def get_shows_elements_in_collection(self, collection_id):
        board_lists = BoardLists.objects.filter(board_id=collection_id)
        return Shows.objects.filter(
            listshowrelation__list__boardlists__in=board_lists
        ).count()

from django.db.models import Avg

from user.models import User
from .models import Board, BoardMembers, BoardFollowers, ShowsList, BoardLists
from show.models import Shows, ShowRates


class BoardLogic(object):

    def __init__(self, data):
        self.data = data

    def create_board(self):

        invited_members = self.data.pop('invited_members', [])

        board = Board.objects.create(**self.data)

        invited_members.append(board.owner.email)

        self.add_members_to_board(board, invited_members)

        return board

    @staticmethod
    def add_members_to_board(board, members_list):
        for member_email in members_list:
            try:
                user = User.objects.get(email=member_email.strip())
            except User.DoesNotExist:
                return

            BoardMembers.objects.create(board_id=board.id, user_id=user.id)
            BoardFollowers.objects.create(board_id=board.id, user_id=user.id)

        board.followers = BoardFollowers.objects.filter(board_id=board.id).count()
        board.save()

    @staticmethod
    def add_follower(board_id, user_id):
        try:
            user = User.objects.get(id=user_id)
            board_followers_obj = BoardFollowers.objects.create(
                board_id=board_id,
                user_id=user.id
            )

            board_followers_obj.board.followers = BoardFollowers.objects.filter(
                board_id=board_id
            ).count()

            board_followers_obj.board.save()

            return True

        except User.DoesNotExist:
            return False

    @staticmethod
    def add_member(board_id, email, is_admin=False):
        try:
            user = User.objects.get(email=email.strip())
        except User.DoesNotExist:
            return False

        BoardMembers.objects.create(
            board_id=board_id,
            user_id=user.id,
            is_admin=is_admin
        )

        return True

    @staticmethod
    def compute_average_show_rating(board_id):
        board_lists = BoardLists.objects.filter(board_id=board_id)
        board_shows = Shows.objects.filter(listshowrelation__list__boardlists__in=board_lists)
        shows_ratings = ShowRates.objects.filter(show__in=board_shows).aggregate(Avg('rating'))

        return shows_ratings['rating__avg'] or 0

    @staticmethod
    def get_shows_number_on_board(board_id):
        board_lists = BoardLists.objects.filter(board_id=board_id)
        return Shows.objects.filter(listshowrelation__list__boardlists__in=board_lists).count()


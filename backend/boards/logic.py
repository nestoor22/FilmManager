from django.db.models import Avg, Q

from user.models import User
from .models import Board, BoardMembers, BoardFollowers, ShowsList, BoardLists
from show.models import Shows, ShowRates


class BoardLogic(object):

    def __init__(self, data=None):
        self.data = data

    def create_board(self):

        invited_members = self.data.pop('invited_members', [])

        print(self.data)
        board = Board.objects.create(**self.data)

        invited_members.append(board.owner.email)

        self.add_members_to_board(board, invited_members)

        return board

    @staticmethod
    def add_members_to_board(board, members_list):
        for member_email in set(members_list):
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

    def get_filtered_boards(self, user_boards, user_id, filters):
        filter_query = Q()
        result = []

        shows_number = filters.get('shows_number', [0, 999])
        min_shows_number = min(shows_number)
        max_shows_number = max(shows_number)

        rating = filters.get('rating', [0, 10])
        min_rating = min(rating)
        max_rating = max(rating)

        followers = filters.get('followers')
        min_followers = min(followers)
        max_followers = max(followers)

        if user_boards and user_id:
            filter_query &= Q(owner_id=user_id)

        if len(filters.get('board_type', [])) == 1:
            filter_query &= Q(is_open=filters.get('board_type')[0] == 'open')

        if filters.get('tags'):
            for tag in filters.get('tags'):
                filter_query |= Q(tags__icontains=tag)

        if filters.get('followers'):
            filter_query &= Q(followers__lte=max_followers, followers__gte=min_followers)

        filtered_boards = Board.objects.filter(filter_query).order_by('created_at')

        for board in filtered_boards:
            if max_rating >= self.compute_average_show_rating(board.id) >= min_rating:
                if max_shows_number >= self.get_shows_number_on_board(board.id) >= min_shows_number:
                    result.append(board)

        return result

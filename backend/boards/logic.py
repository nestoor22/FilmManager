from user.models import User
from .models import Board, BoardMembers


class BoardLogic(object):

    def __init__(self, data):
        self.data = data

    def create_board(self):

        invited_members = self.data.pop('invited_members', [])

        board = Board.objects.create(**self.data)
        self.add_members_to_board(board.id, invited_members)

        return board

    @staticmethod
    def add_members_to_board(board_id, members_list):
        for member_email in members_list:
            try:
                user = User.objects.get(email=member_email)
            except User.DoesNotExist:
                continue

            BoardMembers.objects.create(board_id=board_id, user_id=user.id)

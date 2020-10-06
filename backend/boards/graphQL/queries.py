import graphene

from ..logic import BoardLogic
from .types import Board, BoardType, FiltersType

class BoardsQuery(graphene.ObjectType):
    board = graphene.Field(BoardType, board_id=graphene.Int(required=True))
    boards = graphene.List(
        BoardType,
        user_followed_boards=graphene.Boolean(),
        user_boards=graphene.Boolean(),
        filters=graphene.Argument(FiltersType),
    )
    last_visited_boards = graphene.List(BoardType)

    @staticmethod
    def resolve_board(parent, info, board_id):
        try:
            return Board.objects.get(id=board_id)
        except Board.DoesNotExist:
            return None

    @staticmethod
    def resolve_boards(
        parent,
        info,
        user_boards=False,
        user_followed_boards=None,
        filters=None,
    ):
        user_id = info.context.session.get("_auth_user_id")

        if user_followed_boards and not filters:
            if not user_id:
                raise Exception("User is not logged in")
            return Board.objects.filter(boardfollowers__user_id=user_id)

        if user_boards:
            if not user_id:
                raise Exception("User is not logged in")
            return Board.objects.filter(owner_id=user_id)

        return (
            Board.objects.all().order_by("created_at")
            if not filters
            else BoardLogic().get_filtered_boards(
                user_boards=user_boards, user_id=user_id, filters=filters
            )
        )

    @staticmethod
    def resolve_last_visited_boards(parent, info):
        return Board.objects.filter(
            id__in=info.context.session.get("last_boards", [])
        )

import graphene

from ..models import Board
from .types import CollectionType, FiltersType, ShowsListType, List


class ShowsListsQuery(graphene.ObjectType):
    shows_list = graphene.List(ShowsListType)

    @staticmethod
    def resolve_shows_list(parent, info):
        user_id = info.context.session.get("_auth_user_id")
        return List.objects.filter(owner_id=user_id)


class CollectionsQuery(graphene.ObjectType):
    board = graphene.Field(CollectionType, board_id=graphene.Int(required=True))
    collections = graphene.List(
        CollectionType,
        user_followed_boards=graphene.Boolean(),
        user_boards=graphene.Boolean(),
        filters=graphene.Argument(FiltersType),
    )
    last_visited_boards = graphene.List(CollectionType)

    @staticmethod
    def resolve_board(parent, info, board_id):
        try:
            return Board.objects.get(id=board_id)
        except Board.DoesNotExist:
            return None

    @staticmethod
    def resolve_collections(
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
        )

    @staticmethod
    def resolve_last_visited_boards(parent, info):
        return Board.objects.filter(
            id__in=info.context.session.get("last_boards", [])
        )

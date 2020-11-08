import graphene

from ..models import Board
from .types import CollectionType, FiltersType, ShowsListType, List

from ..helpers import (
    get_user_collections,
    get_filtered_collections,
    get_user_followed_collections,
    get_all_collections
)


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
        user_followed_collections=graphene.Boolean(),
        user_collections=graphene.Boolean(),
        filters=graphene.Argument(FiltersType),
    )

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
        user_collections=False,
        user_followed_collections=None,
        filters=None,
    ):
        user_id = info.context.session.get("_auth_user_id")

        if user_followed_collections and not filters:
            if not user_id:
                raise Exception("User is not logged in")
            print('HERE')
            return get_user_followed_collections(user_id)
        print(user_collections)
        if user_collections:
            if not user_id:
                raise Exception("User is not logged in")
            return get_user_collections(user_id)

        return (
            get_all_collections()
            if not filters
            else get_filtered_collections(
                user_id, user_followed_collections, filters
            )
        )

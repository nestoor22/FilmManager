import graphene

from graphene_django import DjangoObjectType

from user.graphQL.types import UserType
from show.graphQL.types import ShowsType
from ..helpers import get_context_for_obj
from ..models import (
    BoardLists,
    BoardFollowers,
    List,
    ListShowRelation,
    Board
)


class ShowsListRelationType(DjangoObjectType):
    class Meta:
        model = ListShowRelation


class ShowsListType(DjangoObjectType):
    class Meta:
        model = List

    shows_on_list = graphene.List(ShowsListRelationType)

    @staticmethod
    def resolve_shows_on_list(parent, info):
        return ListShowRelation.objects.filter(list_id=parent.id)


class FiltersType(graphene.InputObjectType):
    rating = graphene.List(graphene.Float)
    followers = graphene.List(graphene.Int)
    shows_number = graphene.List(graphene.Int)
    board_type = graphene.List(graphene.String)
    tags = graphene.List(graphene.String)


class CollectionType(graphene.ObjectType):
    id = graphene.Int()
    followers = graphene.Int()
    shared_times = graphene.Int()
    shows_number = graphene.Int()

    average_show_rating = graphene.Float()

    is_followed = graphene.Boolean()
    can_edit = graphene.Boolean()
    is_owner = graphene.Boolean()
    is_open = graphene.Boolean()
    is_board = graphene.Boolean()

    name = graphene.String()
    description = graphene.String()

    created_at = graphene.DateTime()

    owner = graphene.Field(UserType)

    tags = graphene.List(graphene.String)
    lists = graphene.List(ShowsListType)
    shows = graphene.List(ShowsType)

    @staticmethod
    def resolve_lists(parent, info):
        if isinstance(parent, Board):
            return List.objects.filter(boardlists__board__id=parent.id)

    @staticmethod
    def resolve_is_board(parent, info):
        return isinstance(parent, Board)

    @staticmethod
    def resolve_average_show_rating(parent, info):
        collections_context = get_context_for_obj(parent)

        if collections_context:
            return collections_context.compute_average_show_rating(
                collection_id=parent.id
            )

    @staticmethod
    def resolve_is_owner(parent, info):
        return int(parent.owner_id) == \
               int(info.context.session.get("_auth_user_id", -1))

    @staticmethod
    def resolve_shows_number(parent, info):
        collections_context = get_context_for_obj(parent)

        if collections_context:
            return collections_context.get_shows_number_in_collection(
                    collection_id=parent.id
                )

    @staticmethod
    def resolve_shows(parent, info):
        collections_context = get_context_for_obj(parent)
        if collections_context:
            return collections_context.get_shows_elements_in_collection(
                collection_id=parent.id)

    @staticmethod
    def resolve_is_followed(parent, info):
        user_id = info.context.session.get("_auth_user_id")

        try:
            BoardFollowers.objects.get(board_id=parent.id, user_id=user_id)
            return True
        except BoardFollowers.DoesNotExist:
            return False

    @staticmethod
    def resolve_can_edit(parent, info):
        user_id = info.context.session.get("_auth_user_id")

        if int(parent.owner_id) == int(user_id):
            return True

        try:
            return BoardFollowers.objects.get(
                board_id=parent.id, user_id=user_id
            ).is_admin

        except BoardFollowers.DoesNotExist:
            return False


class BoardListType(DjangoObjectType):
    class Meta:
        model = BoardLists


class CollectionInputType(graphene.InputObjectType):
    name = graphene.String()
    description = graphene.String()
    tags = graphene.List(graphene.String)
    is_open = graphene.Boolean()
    invited_members = graphene.List(graphene.String)
    collection_type = graphene.String(required=True)

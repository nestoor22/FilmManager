import graphene

from graphene_django import DjangoObjectType
from user.graphQL.types import UserType
from ..models import (
    BoardLists,
    BoardFollowers,
    List,
    ListShowRelation
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
    owner = graphene.Field(UserType)
    name = graphene.String()
    created_at = graphene.DateTime()
    description = graphene.String()
    tags = graphene.List(graphene.String)
    followers = graphene.Int()
    shared_times = graphene.Int()
    lists = graphene.List(ShowsListType)
    is_followed = graphene.Boolean()
    average_show_rating = graphene.Float()
    shows_number = graphene.Int()
    can_edit = graphene.Boolean()
    is_owner = graphene.Boolean()
    is_open = graphene.Boolean()

    @staticmethod
    def resolve_lists(parent, info):
        return List.objects.filter(boardlists__board__id=parent.id)

    @staticmethod
    def resolve_average_show_rating(parent, info):
        return 0

    @staticmethod
    def resolve_is_owner(parent, info):
        return int(parent.owner_id) == \
               int(info.context.session.get("_auth_user_id"))

    @staticmethod
    def resolve_shows_number(parent, info):
        return 0

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

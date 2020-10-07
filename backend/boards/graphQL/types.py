import graphene

from graphene_django import DjangoObjectType

from lists.models import ShowsList
from lists.graphQL.types import ShowsListType
from user.graphQL.types import UserType, User
from ..logic import BoardLogic
from ..models import Board, BoardLists, BoardMembers, BoardFollowers


class BoardMemberType(DjangoObjectType):
    class Meta:
        model = BoardMembers


class FiltersType(graphene.InputObjectType):
    rating = graphene.List(graphene.Float)
    followers = graphene.List(graphene.Int)
    shows_number = graphene.List(graphene.Int)
    board_type = graphene.List(graphene.String)
    tags = graphene.List(graphene.String)


class BoardType(DjangoObjectType):
    class Meta:
        model = Board

    lists = graphene.List(ShowsListType)
    is_followed = graphene.Boolean()
    members = graphene.List(UserType)
    tags = graphene.List(graphene.String)
    average_show_rating = graphene.Float()
    shows_number = graphene.Int()
    can_edit = graphene.Boolean()

    @staticmethod
    def resolve_lists(parent, info):
        return ShowsList.objects.filter(boardlists__board__id=parent.id)

    @staticmethod
    def resolve_members(parent, info):
        return User.objects.filter(boardmembers__board_id=parent.id)

    @staticmethod
    def resolve_tags(parent, info):
        return parent.tags.split(",") if parent.tags else []

    @staticmethod
    def resolve_average_show_rating(parent, info):
        return BoardLogic.compute_average_show_rating(parent.id)

    @staticmethod
    def resolve_shows_number(parent, info):
        return BoardLogic.get_shows_number_on_board(parent.id)

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


class BoardInputType(graphene.InputObjectType):
    name = graphene.String()
    background_color = graphene.String()
    description = graphene.String()
    tags = graphene.List(graphene.String)
    is_open = graphene.Boolean()
    invited_members = graphene.List(graphene.String)

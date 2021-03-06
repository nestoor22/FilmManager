import graphene
from graphene_django import DjangoObjectType
from django.db.models import Q


from user.models import User, Followers
from shows_collections.models import Board
from show.graphQL.types import ShowReviewType, ShowReview


class UserType(DjangoObjectType):
    followers = graphene.Int()
    followed = graphene.Int()
    is_followed_by_current_user = graphene.Boolean()
    boards = graphene.List('shows_collections.graphQL.types.CollectionType')
    reviews = graphene.List(ShowReviewType)
    is_logged_in = graphene.Boolean()

    class Meta:
        model = User

    @staticmethod
    def resolve_followers(parent, info):
        return Followers.objects.filter(followed_id=parent.id).count()

    @staticmethod
    def resolve_followed(parent, info):
        return Followers.objects.filter(follower_id=parent.id).count()

    @staticmethod
    def resolve_is_followed_by_current_user(parent, info):
        try:
            Followers.objects.get(
                follower_id=info.context.user.id, followed_id=parent.id
            )
            return True
        except Followers.DoesNotExist:
            return False

    @staticmethod
    def resolve_boards(parent, info):
        return Board.objects.filter(
            Q(owner_id=parent.id) |
            Q(boardmembers__user_id=parent.id) |
            Q(boardfollowers__user_id=parent.id)
        )

    @staticmethod
    def resolve_reviews(parent, info):
        return ShowReview.objects.filter(author_id=parent.id)

    @staticmethod
    def resolve_is_logged_in(parent, info):
        return info.context.session.get('_auth_user_id') == str(parent.id)

    @staticmethod
    def resolve_password(parent, info):
        return ''


class UsersType(graphene.ObjectType):
    pages = graphene.Int()
    data = graphene.List(UserType)


class UserInput(graphene.InputObjectType):
    first_name = graphene.String()
    last_name = graphene.String()
    email = graphene.String()
    password = graphene.String()
    bio = graphene.String()
    favorite_show = graphene.String()
    city = graphene.String()
    country = graphene.String()
    birthday = graphene.Date()

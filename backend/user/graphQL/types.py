import graphene
from graphene_django import DjangoObjectType

from user.models import User, Followers


class UserType(DjangoObjectType):
    followers = graphene.Int()
    followed = graphene.Int()
    is_followed_by_current_user = graphene.Boolean()

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

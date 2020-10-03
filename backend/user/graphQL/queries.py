import graphene

from django.db.models import Q
from .types import UserType, User


class UserQuery(graphene.ObjectType):
    user = graphene.Field(UserType)
    users = graphene.List(
        UserType,
        search=graphene.String(),
        limit=graphene.Int(),
        offset=graphene.Int()
    )

    user_name = graphene.Field(UserType)
    is_logged_in = graphene.Boolean()

    @staticmethod
    def resolve_user(parent, info):
        user_id = info.context.session.get('_auth_user_id')
        if not user_id:
            raise Exception('User is not logged in')
        return User.objects.get(id=user_id)

    @staticmethod
    def resolve_users(parent, info, search='', offset=0, limit=20 ):
        return User.objects.filter(
            Q(first_name__icontains=search) | Q(last_name__icontains=search)
        )[offset:limit]

    @staticmethod
    def resolve_user_name(parent, info):
        user_id = info.context.session.get('_auth_user_id')
        if not user_id:
            return None

        return User.objects.get(id=user_id)

    @staticmethod
    def resolve_is_logged_in(parent, info):
        return True if info.context.session.get('_auth_user_id') else False

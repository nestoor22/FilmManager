from math import ceil

import graphene
from django.db.models import Q

from .types import UserType, User, UsersType


class UserQuery(graphene.ObjectType):
    user = graphene.Field(UserType, user_id=graphene.Int())
    users = graphene.Field(
        UsersType,
        search=graphene.String(),
        limit=graphene.Int(),
        offset=graphene.Int()
    )

    user_name = graphene.Field(UserType)
    is_logged_in = graphene.Boolean()

    @staticmethod
    def resolve_user(parent, info, user_id=''):
        if not user_id:
            session_user_id = info.context.session.get('_auth_user_id')
            if not session_user_id:
                raise Exception('User is not logged in')

        return User.objects.get(id=user_id)

    @staticmethod
    def resolve_users(parent, info, search='', offset=0, limit=20):
        number_of_items_per_page = 20

        found_users = User.objects.filter(
            Q(first_name__icontains=search) | Q(last_name__icontains=search)
        ).exclude(id=info.context.session.get('_auth_user_id'))

        return {
            'pages': ceil(len(found_users) / number_of_items_per_page),
            'data': found_users[offset:limit]
        }

    @staticmethod
    def resolve_user_name(parent, info):
        user_id = info.context.session.get('_auth_user_id')
        if not user_id:
            return None

        return User.objects.get(id=user_id)

    @staticmethod
    def resolve_is_logged_in(parent, info):
        return True if info.context.session.get('_auth_user_id') else False

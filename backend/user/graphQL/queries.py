from math import ceil

import graphene
from django.db.models import Q

from .types import UserType, User, UsersType, Followers


class UserQuery(graphene.ObjectType):
    user = graphene.Field(UserType, user_id=graphene.Int())
    users = graphene.Field(
        UsersType,
        search=graphene.String(),
        limit=graphene.Int(),
        offset=graphene.Int()
    )

    followers = graphene.List(
        UserType,
        user_id=graphene.Int(),
        limit=graphene.Int(),
        offset=graphene.Int()
    )

    followed = graphene.List(
        UserType,
        user_id=graphene.Int(),
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

            user_id = session_user_id

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

    @staticmethod
    def resolve_followers(parent, info, user_id=None, offset=0, limit=20):
        if not user_id:
            user_id = info.context.session.get('_auth_user_id')

        followers_id = Followers.objects.filter(
            followed_id=user_id).values_list('follower_id', flat=True
        )
        return User.objects.filter(id__in=list(followers_id))[offset:limit]

    @staticmethod
    def resolve_followed(parent, info, user_id=None, offset=0, limit=20):
        if not user_id:
            user_id = info.context.session.get('_auth_user_id')

        followed_ids = Followers.objects.filter(
            follower_id=user_id).values_list('followed_id', flat=True
        )
        return User.objects.filter(id__in=list(followed_ids))[offset:limit]
    
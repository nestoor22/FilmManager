import graphene
from google.oauth2 import id_token
from google.auth.transport import requests
from django.contrib.auth import authenticate, login, logout
from graphene_django import DjangoObjectType
from graphene_file_upload.scalars import Upload
from graphene.types import Field, List

from FilmManager.settings import GOOGLE_CLIENT_ID
from .models import User


class UserType(DjangoObjectType):
    class Meta:
        model = User


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


class UserQuery(graphene.ObjectType):
    user = Field(UserType)
    users = List(UserType)
    user_name = Field(UserType)
    is_logged_in = graphene.Boolean()

    @staticmethod
    def resolve_user(parent, info):
        user_id = info.context.session.get('_auth_user_id')
        if not user_id:
            raise Exception('User is not logged in')
        return User.objects.get(id=user_id)

    @staticmethod
    def resolve_users(parent, info):
        return User.objects.all()

    @staticmethod
    def resolve_user_name(parent, info):
        user_id = info.context.session.get('_auth_user_id')
        if not user_id:
            return None

        return User.objects.get(id=user_id)

    @staticmethod
    def resolve_is_logged_in(parent, info):
        return True if info.context.session.get('_auth_user_id') else False


class CreateUser(graphene.Mutation):
    id = graphene.Int()

    class Arguments:
        user = UserInput(required=True)
        photo = Upload()

    @staticmethod
    def mutate(parent, info, **kwargs):
        user_info = kwargs.get('user')
        user_info['photo'] = kwargs.get('photo')
        password = user_info.pop('password')

        user = User.objects.create(**user_info)

        user.set_password(password)
        user.save()

        login(info.context, user, backend='django.contrib.auth.backends.ModelBackend')

        return CreateUser(id=user.id)


class SignIn(graphene.Mutation):
    id = graphene.Int()
    first_name = graphene.String()
    last_name = graphene.String()
    email = graphene.String()

    class Arguments:
        email = graphene.String()
        password = graphene.String()

    @staticmethod
    def mutate(parent, info, **kwargs):
        user = authenticate(
            username=kwargs.get('email'), password=kwargs.get('password')
        )

        if not user:
            raise Exception('Incorrect credentials')

        login(info.context, user, backend='django.contrib.auth.backends.ModelBackend')
        return SignIn(
            id=user.id,
            first_name=user.first_name,
            last_name=user.last_name,
            email=user.email,
        )


class GoogleSignIn(graphene.Mutation):
    id = graphene.Int()
    first_name = graphene.String()
    last_name = graphene.String()
    email = graphene.String()

    class Arguments:
        access_token = graphene.String(required=True)
        user = UserInput(required=True)

    @staticmethod
    def mutate(parent, info, **kwargs):
        id_info = id_token.verify_oauth2_token(kwargs['access_token'], requests.Request(), GOOGLE_CLIENT_ID)

        if id_info['iss'] not in ['accounts.google.com', 'https://accounts.google.com']:
            raise ValueError('Wrong issuer.')

        user_info = kwargs['user']

        try:
            user_instance = User.objects.get(email=user_info['email'])
        except User.DoesNotExist:
            user_instance = User.objects.create(**user_info)

        login(info.context, user_instance, backend='django.contrib.auth.backends.ModelBackend')

        return GoogleSignIn(
            id=user_instance.id,
            first_name=user_instance.first_name,
            last_name=user_instance.last_name,
            email=user_instance.email,
        )


class LogOut(graphene.Mutation):
    ok = graphene.Boolean()

    @staticmethod
    def mutate(parent, info):
        logout(info.context)
        return LogOut(ok=True)

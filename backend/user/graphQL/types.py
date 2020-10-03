import graphene
from graphene_django import DjangoObjectType

from user.models import User


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

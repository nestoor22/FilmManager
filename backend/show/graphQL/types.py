import graphene

from bs4 import BeautifulSoup
from graphene_django import DjangoObjectType

from ..logic import ShowsLogic
from ..models import Shows, Actors, Genres, ShowRates, ShowReview


class ActorsType(DjangoObjectType):
    class Meta:
        model = Actors


class GenresType(DjangoObjectType):
    class Meta:
        model = Genres


class RatesType(DjangoObjectType):
    class Meta:
        model = ShowRates


class ShowReviewType(DjangoObjectType):
    short_variant = graphene.String()
    author = graphene.String()

    class Meta:
        model = ShowReview

    @staticmethod
    def resolve_short_variant(parent, info):
        beautiful_soup_obj = BeautifulSoup(
            parent.content, features='html.parser'
        )
        return beautiful_soup_obj.text[:150]

    @staticmethod
    def resolve_author(parent, info):
        return f'{parent.author.first_name} {parent.author.last_name}'


class ShowsType(DjangoObjectType):
    class Meta:
        model = Shows

    actors = graphene.List(ActorsType)
    genres = graphene.List(GenresType)
    users_rating = graphene.Float()
    current_user_rating = graphene.Float()

    @staticmethod
    def resolve_actors(parent, info):
        return Actors.objects.filter(showactors__show_id=parent.show_id)

    @staticmethod
    def resolve_genres(parent, info):
        return Genres.objects.filter(showgenre__show_id=parent.show_id)

    @staticmethod
    def resolve_users_rating(parent, info):
        return ShowsLogic.compute_show_rate(parent.show_id)

    @staticmethod
    def resolve_current_user_rating(parent, info):
        user_id = info.context.session.get("_auth_user_id")

        try:
            rate_instance = ShowRates.objects.get(
                user_id=user_id, show_id=parent.show_id
            )
        except ShowRates.DoesNotExist:
            return None

        return rate_instance.rating


class ShowRateInput(graphene.InputObjectType):
    show_id = graphene.Int(required=True)
    rating = graphene.Float(required=True)

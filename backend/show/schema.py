from graphene_django import DjangoObjectType
from graphene.types import Field, List
from .models import Shows, Actors, Genres, Countries
import graphene


class ActorsType(DjangoObjectType):
    class Meta:
        model = Actors


class GenresType(DjangoObjectType):
    class Meta:
        model = Genres


class CountryType(DjangoObjectType):
    class Meta:
        model = Countries


class ShowsType(DjangoObjectType):
    class Meta:
        model = Shows

    actors = graphene.List(ActorsType)
    genres = graphene.List(GenresType)
    countries = graphene.List(CountryType)

    @staticmethod
    def resolve_actors(parent, info):
        return Actors.objects.filter(showactors__show_id=parent.show_id)

    @staticmethod
    def resolve_genres(parent, info):
        return Genres.objects.filter(showgenre__show_id=parent.show_id)

    @staticmethod
    def resolve_countries(parent, info):
        return Countries.objects.filter(showcountry__show_id=parent.show_id)


class ShowQuery(graphene.ObjectType):
    show = graphene.List(ShowsType, show_id=graphene.Int())
    actors = graphene.List(ActorsType, actor_id=graphene.Int())

    @staticmethod
    def resolve_show(parent, info, show_id):
        return Shows.objects.filter(show_id=show_id)

    @staticmethod
    def resolve_actors(parent, info):
        return Actors.objects.all()

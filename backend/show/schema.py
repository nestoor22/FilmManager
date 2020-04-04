from graphene_django import DjangoObjectType
from .models import Shows, Actors, Genres
import graphene


class ActorsType(DjangoObjectType):
    class Meta:
        model = Actors


class GenresType(DjangoObjectType):
    class Meta:
        model = Genres


class ShowsType(DjangoObjectType):
    class Meta:
        model = Shows

    actors = graphene.List(ActorsType)
    genres = graphene.List(GenresType)

    @staticmethod
    def resolve_actors(parent, info):
        return Actors.objects.filter(
            showactors__show_id=parent.show_id)

    @staticmethod
    def resolve_genres(parent, info):
        return Genres.objects.filter(
            showgenre__show_id=parent.show_id)


class ShowQuery(graphene.ObjectType):
    shows = graphene.List(
        ShowsType,
        show_type=graphene.String(),
        page=graphene.Int(),
        order_by=graphene.String(),
        is_random=graphene.Boolean())

    actors = graphene.List(ActorsType, actor_id=graphene.Int())

    @staticmethod
    def resolve_shows(parent, info, **kwargs):
        number_of_returned_values = 24
        page = kwargs.get('page', 0)
        offset = number_of_returned_values * page
        show_type = kwargs.get('show_type')
        is_random = kwargs.get('is_random')
        order_by = kwargs.get('order_by', 'show_id')

        if show_type and is_random:
            return Shows.objects.filter(
                showtype=show_type).order_by(
                '?')[offset:offset+number_of_returned_values]

        elif show_type:
            return Shows.objects.filter(
                showtype=show_type).order_by(
                order_by)[offset:offset + number_of_returned_values]

        else:
            return Shows.objects.all().order_by(
                order_by)[offset:offset+number_of_returned_values]

    @staticmethod
    def resolve_actors(parent, info):
        return Actors.objects.all()

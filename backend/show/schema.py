from graphene_django import DjangoObjectType
from graphene.types import Field, List
from .models import Shows, Actors, ShowActors
import graphene


class ShowsType(DjangoObjectType):
    class Meta:
        model = Shows


class ActorsType(DjangoObjectType):
    class Meta:
        model = Actors


class ShowActorType(DjangoObjectType):
    class Meta:
        model = ShowActors
        fields = ('show', 'actor', )


class ShowQuery(graphene.ObjectType):
    show = graphene.List(ShowsType, show_id=graphene.Int())
    actor = graphene.List(ActorsType, actor_id=graphene.Int())
    film_actors = graphene.List(ShowActorType)

    @staticmethod
    def resolve_show(parent, info, show_id):
        return Shows.objects.filter(show_id=show_id)

    @staticmethod
    def resolve_actors(parent, info):
        return Actors.objects.all()


class CreateShow(graphene.Mutation):
    id = graphene.Int()

    class Arguments:
        id = graphene.Int()

    def mutate(self, info, id):
        instance = Shows.objects.create(show_id=id)
        return CreateShow(id=instance.id)
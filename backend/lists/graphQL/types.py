import graphene

from graphene_django import DjangoObjectType

from ..models import ShowsList, ListShowRelation


class ShowsListRelationType(DjangoObjectType):
    class Meta:
        model = ListShowRelation


class ShowsListType(DjangoObjectType):
    class Meta:
        model = ShowsList

    shows_on_list = graphene.List(ShowsListRelationType)

    @staticmethod
    def resolve_shows_on_list(parent, info):
        return ListShowRelation.objects.filter(list_id=parent.id)
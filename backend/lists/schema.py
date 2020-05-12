import graphene

from graphene_django import DjangoObjectType

from .models import ShowsList


class ShowsListType(DjangoObjectType):
    class Meta:
        model = ShowsList


class Query(graphene.ObjectType):
    shows_list = graphene.List(ShowsList)

    @staticmethod
    def resolve_shows_list(parent, info):
        user_id = info.context.session.get('_auth_user_id')
        return ShowsList.objects.filter(owner_id=user_id)

import graphene

from .types import ShowsListType, ShowsList


class ShowsListsQuery(graphene.ObjectType):
    shows_list = graphene.List(ShowsListType)

    @staticmethod
    def resolve_shows_list(parent, info):
        user_id = info.context.session.get("_auth_user_id")
        return ShowsList.objects.filter(owner_id=user_id)

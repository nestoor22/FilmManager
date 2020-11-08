import graphene

from .types import CollectionInputType
from ..models import ListShowRelation
from ..strategies.context import CollectionsContext


class AddShowToList(graphene.Mutation):
    id = graphene.Int()

    class Arguments:
        list_id = graphene.Int()
        show_id = graphene.Int()

    @staticmethod
    def mutate(parent, info, list_id, show_id):
        show_on_list_instance = ListShowRelation.objects.create(
            list_id=list_id, show_id=show_id
        )
        return AddShowToList(id=show_on_list_instance.id)


class CreateCollectionMutation(graphene.Mutation):
    id = graphene.Int()

    class Arguments:
        collection = CollectionInputType(required=True)

    @staticmethod
    def mutate(parent, info, **kwargs):
        collection_info = kwargs.get("collection")
        collection_info["owner"] = info.context.user

        collection_context = CollectionsContext(
            collection_type=collection_info.pop('collection_type'),
            collection_data=collection_info
        )

        collection_context.create()

        return CreateCollectionMutation(
            id=collection_context._strategy.collection_obj.id
        )


class FollowCollectionMutation(graphene.Mutation):
    ok = graphene.Boolean()

    class Arguments:
        board_id = graphene.ID(required=True)
        unfollow = graphene.Boolean()

    @staticmethod
    def mutate(parent, info, board_id, unfollow=False):
        user_id = info.context.session.get("_auth_user_id")

        return FollowCollectionMutation(ok=True)


class SetLastVisitedBoard(graphene.Mutation):
    ok = graphene.Boolean()

    class Arguments:
        last_visited_board_id = graphene.Int()

    @staticmethod
    def mutate(parent, info, last_visited_board_id):
        last_visited_boards = info.context.session.get("last_boards", [])

        if last_visited_board_id in last_visited_boards:
            last_visited_boards.remove(last_visited_board_id)

        info.context.session["last_boards"] = (
            [last_visited_board_id] + last_visited_boards[:2]
            if len(last_visited_boards) == 4
            else [last_visited_board_id] + last_visited_boards
        )

        return SetLastVisitedBoard(ok=True)

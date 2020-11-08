import graphene

from user.graphQL.queries import UserQuery
from show.graphQL.queries import ShowQuery
from shows_collections.graphQL.queries import CollectionsQuery, ShowsListsQuery
from show.graphQL.mutations import SetShowRate, DeleteShowRate, AddReview
from user.graphQL.mutations import (
    SignIn,
    GoogleSignIn,
    LogOut,
    CreateUser,
    SubscribeUser,
    UnsubscribeUser
)
from shows_collections.graphQL.mutations import (
    SetLastVisitedBoard,
    CreateCollectionMutation,
    FollowCollectionMutation,
    AddShowToList,
    CreateListOnBoard
)


class Query(ShowsListsQuery, CollectionsQuery, ShowQuery, UserQuery):
    pass


class Mutation(graphene.ObjectType):
    sign_in = SignIn.Field()
    sign_in_with_google = GoogleSignIn.Field()
    log_out = LogOut.Field()
    create_user = CreateUser.Field()
    create_collection = CreateCollectionMutation.Field()
    create_list_on_board = CreateListOnBoard.Field()
    follow_board = FollowCollectionMutation.Field()
    set_last_visited_board = SetLastVisitedBoard.Field()
    set_show_rate = SetShowRate.Field()
    delete_show_rate = DeleteShowRate.Field()
    add_show_to_list = AddShowToList.Field()
    add_review = AddReview.Field()
    follow_user = SubscribeUser.Field()
    unfollow_user = UnsubscribeUser.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)

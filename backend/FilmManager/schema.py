import graphene

from user.graphQL.queries import UserQuery
from show.graphQL.queries import ShowQuery
from boards.graphQL.queries import BoardsQuery
from lists.graphQL.queries import ShowsListsQuery
from lists.graphQL.mutations import AddShowToList, CreateList
from show.graphQL.mutations import SetShowRate, DeleteShowRate, AddReview
from user.graphQL.mutations import (
    SignIn,
    GoogleSignIn,
    LogOut,
    CreateUser,
    SubscribeUser,
    UnsubscribeUser
)
from boards.graphQL.mutations import (
    SetLastVisitedBoard, CreateBoardMutation, FollowBoardMutation
)


class Query(ShowsListsQuery, BoardsQuery, ShowQuery, UserQuery):
    pass


class Mutation(graphene.ObjectType):
    sign_in = SignIn.Field()
    sign_in_with_google = GoogleSignIn.Field()
    log_out = LogOut.Field()
    create_user = CreateUser.Field()
    create_board = CreateBoardMutation.Field()
    follow_board = FollowBoardMutation.Field()
    set_last_visited_board = SetLastVisitedBoard.Field()
    set_show_rate = SetShowRate.Field()
    delete_show_rate = DeleteShowRate.Field()
    create_list = CreateList.Field()
    add_show_to_list = AddShowToList.Field()
    add_review = AddReview.Field()
    follow_user = SubscribeUser.Field()
    unfollow_user = UnsubscribeUser.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)

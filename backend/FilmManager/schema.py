import graphene

from user.schema import SignIn, UserQuery, CreateUser, LogOut, GoogleSignIn
from show.schema import ShowQuery, SetShowRate, DeleteShowRate
from lists.schema import AddShowToList, CreateList, ShowsListsQuery
from boards.schema import BoardsQuery, CreateBoardMutation, SetLastVisitedBoard, FollowBoardMutation


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


schema = graphene.Schema(query=Query, mutation=Mutation)

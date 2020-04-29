import graphene
from show.schema import ShowQuery
from user.schema import SignIn, UserQuery, CreateUser
from boards.schema import BoardsQuery, CreateBoardMutation, SetLastVisitedBoard


class Query( BoardsQuery, ShowQuery, UserQuery):
    pass


class Mutation(graphene.ObjectType):
    sign_in = SignIn.Field()
    create_user = CreateUser.Field()
    create_board = CreateBoardMutation.Field()
    set_last_visited_board = SetLastVisitedBoard.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)

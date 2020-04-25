import graphene
from show.schema import ShowQuery
from boards.schema import BoardsQuery, CreateBoardMutation
from user.schema import SignIn, UserQuery, CreateUser


class Query( BoardsQuery, ShowQuery, UserQuery):
    pass


class Mutation(graphene.ObjectType):
    sign_in = SignIn.Field()
    create_user = CreateUser.Field()
    create_board = CreateBoardMutation.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)

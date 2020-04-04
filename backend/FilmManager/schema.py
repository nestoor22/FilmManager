from show.schema import ShowQuery
from user.schema import SignIn, UserQuery, CreateUser
import graphene


class Query(ShowQuery, UserQuery):
    pass


class Mutation(graphene.ObjectType):
    sign_in = SignIn.Field()
    create_user = CreateUser.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)

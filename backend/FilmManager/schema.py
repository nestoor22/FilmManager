from show.schema import ShowQuery
from user.schema import SignIn, UserQuery
import graphene


class Query(ShowQuery, UserQuery):
    pass


class Mutation(graphene.ObjectType):
    sign_in = SignIn.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)

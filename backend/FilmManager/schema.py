from show.schema import ShowQuery, CreateShow
from user.schema import CreateUser, UserQuery
import graphene


class Query(ShowQuery, UserQuery):
    pass


class Mutation(graphene.ObjectType):
    create_user = CreateUser.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
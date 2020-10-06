import graphene

from ..logic import ShowsLogic
from .types import ShowRateInput, ShowReview


class SetShowRate(graphene.Mutation):
    id = graphene.Int()

    class Arguments:
        show_rate_info = ShowRateInput(required=True)

    @staticmethod
    def mutate(parent, info, show_rate_info):
        show_rate_info["user_id"] = info.context.session.get("_auth_user_id")

        rate_id = ShowsLogic(show_rate_info).add_rate_for_show()

        return SetShowRate(id=rate_id)


class DeleteShowRate(graphene.Mutation):
    ok = graphene.Boolean()

    class Arguments:
        show_rate_id = graphene.Int(required=True)

    @staticmethod
    def mutate(parent, info, show_rate_id):
        user_id = info.context.session.get("_auth_user_id")
        ok = ShowsLogic.delete_show_rate(show_id=show_rate_id, user_id=user_id)

        return DeleteShowRate(ok=ok)


class AddReview(graphene.Mutation):
    ok = graphene.Boolean()

    class Arguments:
        content = graphene.String()
        show_id = graphene.Int()

    @staticmethod
    def mutate(parent, info, content, show_id):
        user_id = info.context.session.get("_auth_user_id")

        ShowReview.objects.create(
            author_id=user_id, content=content, show_id=show_id
        )

        return AddReview(ok=True)


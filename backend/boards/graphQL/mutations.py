import graphene

from ..logic import BoardLogic
from .types import BoardInputType, BoardFollowers


class CreateBoardMutation(graphene.Mutation):
    id = graphene.Int()

    class Arguments:
        board = BoardInputType(required=True)

    @staticmethod
    def mutate(parent, info, **kwargs):
        board_info = kwargs.get("board")

        board_info["owner_id"] = info.context.session.get("_auth_user_id")
        board_info["tags"] = ",".join(board_info.pop("tags", []))

        board = BoardLogic(board_info).create_board()

        return CreateBoardMutation(id=board.id)


class FollowBoardMutation(graphene.Mutation):
    ok = graphene.Boolean()

    class Arguments:
        board_id = graphene.ID(required=True)
        unfollow = graphene.Boolean()

    @staticmethod
    def mutate(parent, info, board_id, unfollow=False):
        user_id = info.context.session.get("_auth_user_id")

        if not unfollow:
            success = BoardLogic.add_follower(
                board_id=board_id, user_id=user_id
            )
        else:
            BoardFollowers.objects.filter(
                board_id=board_id, user_id=user_id
            ).delete()
            success = True

        return FollowBoardMutation(ok=success)


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

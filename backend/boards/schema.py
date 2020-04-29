import graphene

from graphene_django import DjangoObjectType

from lists.models import ShowsList
from lists.schema import ShowsListType
from .models import Board, BoardLists


class BoardType(DjangoObjectType):
    class Meta:
        model = Board

    lists = graphene.List(ShowsListType)

    @staticmethod
    def resolve_lists(parent, info):
        return ShowsList.objects.filter(boardlists__board__id=parent.id)


class BoardListType(DjangoObjectType):
    class Meta:
        model = BoardLists


class BoardInputType(graphene.InputObjectType):
    name = graphene.String()
    background_color = graphene.String()
    is_open = graphene.Boolean()
    is_private = graphene.Boolean()


class CreateBoardMutation(graphene.Mutation):
    id = graphene.Int()

    class Arguments:
        board = BoardInputType(required=True)

    @staticmethod
    def mutate(parent, info, **kwargs):
        board_info = kwargs.get('board')

        board_info['owner_id'] = info.context.session.get('_auth_user_id')

        board = Board.objects.create(**board_info)

        return CreateBoardMutation(id=board.id)


class SetLastVisitedBoard(graphene.Mutation):
    ok = graphene.Boolean()

    class Arguments:
        last_visited_board_id = graphene.Int()

    @staticmethod
    def mutate(parent, info, last_visited_board_id):
        last_visited_boards = info.context.session.get('last_boards', [])

        if last_visited_board_id in last_visited_boards:
            last_visited_boards.remove(last_visited_board_id)

        info.context.session['last_boards'] = [last_visited_board_id] + last_visited_boards[:2] \
            if len(last_visited_boards) == 4 else [last_visited_board_id] + last_visited_boards

        return SetLastVisitedBoard(ok=True)


class BoardsQuery(graphene.ObjectType):
    boards = graphene.List(BoardType)
    last_visited_boards = graphene.List(BoardType)

    @staticmethod
    def resolve_boards(parent, info):
        user_id = info.context.session.get('_auth_user_id')
        return Board.objects.filter(owner_id=user_id).order_by('created_at')

    @staticmethod
    def resolve_last_visited_boards(parent, info):
        return Board.objects.filter(id__in=info.context.session.get('last_boards', []))

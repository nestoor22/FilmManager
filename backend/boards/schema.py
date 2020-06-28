import graphene

from graphene_django import DjangoObjectType

from lists.models import ShowsList
from lists.schema import ShowsListType
from user.schema import UserType, User
from .logic import BoardLogic
from .models import Board, BoardLists, BoardMembers, BoardFollowers


class BoardMemberType(DjangoObjectType):
    class Meta:
        model = BoardMembers


class FiltersType(graphene.InputObjectType):
    rating = graphene.List(graphene.Float)
    followers = graphene.List(graphene.Int)
    shows_number = graphene.List(graphene.Int)
    board_type = graphene.List(graphene.String)
    tags = graphene.List(graphene.String)


class BoardType(DjangoObjectType):
    class Meta:
        model = Board

    lists = graphene.List(ShowsListType)
    is_followed = graphene.Boolean()
    members = graphene.List(UserType)
    tags = graphene.List(graphene.String)
    average_show_rating = graphene.Float()
    shows_number = graphene.Int()

    @staticmethod
    def resolve_lists(parent, info):
        return ShowsList.objects.filter(boardlists__board__id=parent.id)

    @staticmethod
    def resolve_members(parent, info):
        return User.objects.filter(boardmembers__board_id=parent.id)

    @staticmethod
    def resolve_tags(parent, info):
        return parent.tags.split(',') if parent.tags else []

    @staticmethod
    def resolve_average_show_rating(parent, info):
        return BoardLogic.compute_average_show_rating(parent.id)

    @staticmethod
    def resolve_shows_number(parent, info):
        return BoardLogic.get_shows_number_on_board(parent.id)

    @staticmethod
    def resolve_is_followed(parent, info):
        user_id = info.context.session.get('_auth_user_id')

        try:
            BoardFollowers.objects.get(board_id=parent.id, user_id=user_id)
            return True
        except BoardFollowers.DoesNotExist:
            return False


class BoardListType(DjangoObjectType):
    class Meta:
        model = BoardLists


class BoardInputType(graphene.InputObjectType):
    name = graphene.String()
    background_color = graphene.String()
    description = graphene.String()
    tags = graphene.List(graphene.String)
    is_open = graphene.Boolean()
    is_private = graphene.Boolean()
    invited_members = graphene.List(graphene.String)


class CreateBoardMutation(graphene.Mutation):
    id = graphene.Int()

    class Arguments:
        board = BoardInputType(required=True)

    @staticmethod
    def mutate(parent, info, **kwargs):
        board_info = kwargs.get('board')

        board_info['owner_id'] = info.context.session.get('_auth_user_id')
        board_info['tags'] = ','.join(board_info.pop('tags', []))

        board = BoardLogic(board_info).create_board()

        return CreateBoardMutation(id=board.id)


class FollowBoardMutation(graphene.Mutation):
    ok = graphene.Boolean()

    class Arguments:
        board_id = graphene.ID(required=True)
        unfollow = graphene.Boolean()

    @staticmethod
    def mutate(parent, info, board_id, unfollow=False):
        user_id = info.context.session.get('_auth_user_id')

        if not unfollow:
            success = BoardLogic.add_follower(board_id=board_id, user_id=user_id)
        else:
            BoardFollowers.objects.filter(board_id=board_id, user_id=user_id).delete()
            success = True

        return FollowBoardMutation(ok=success)


class SetLastVisitedBoard(graphene.Mutation):
    ok = graphene.Boolean()

    class Arguments:
        last_visited_board_id = graphene.Int()

    @staticmethod
    def mutate(parent, info, last_visited_board_id):
        last_visited_boards = info.context.session.get('last_boards', [])

        if last_visited_board_id in last_visited_boards:
            last_visited_boards.remove(last_visited_board_id)

        info.context.session['last_boards'] = (
            [last_visited_board_id] + last_visited_boards[:2]
            if len(last_visited_boards) == 4
            else [last_visited_board_id] + last_visited_boards
        )

        return SetLastVisitedBoard(ok=True)


class BoardsQuery(graphene.ObjectType):
    board = graphene.Field(BoardType, board_id=graphene.Int(required=True))
    boards = graphene.List(BoardType, user_boards=graphene.Boolean(), filters=graphene.Argument(FiltersType))
    last_visited_boards = graphene.List(BoardType)

    @staticmethod
    def resolve_board(parent, info, board_id):
        return Board.objects.get(id=board_id)

    @staticmethod
    def resolve_boards(parent, info, user_boards=False, filters=None):
        user_id = info.context.session.get('_auth_user_id')

        if user_boards and not filters:
            if not user_id:
                raise Exception('User is not logged in')
            return Board.objects.filter(
                boardfollowers__user_id=user_id)

        return Board.objects.all().order_by('created_at') \
            if not filters else BoardLogic().get_filtered_boards(
            user_boards=user_boards,
            user_id=user_id,
            filters=filters
        )

    @staticmethod
    def resolve_last_visited_boards(parent, info):
        return Board.objects.filter(id__in=info.context.session.get('last_boards', []))

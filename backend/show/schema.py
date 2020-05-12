from math import ceil

import graphene
from graphene_django import DjangoObjectType

from .logic import ShowsLogic
from .models import Shows, Actors, Genres, ShowRates


class ActorsType(DjangoObjectType):
    class Meta:
        model = Actors


class GenresType(DjangoObjectType):
    class Meta:
        model = Genres


class RatesType(DjangoObjectType):
    class Meta:
        model = ShowRates


class ShowsType(DjangoObjectType):
    class Meta:
        model = Shows

    actors = graphene.List(ActorsType)
    genres = graphene.List(GenresType)
    users_rating = graphene.Float()
    current_user_rating = graphene.Float()

    @staticmethod
    def resolve_actors(parent, info):
        return Actors.objects.filter(showactors__show_id=parent.show_id)

    @staticmethod
    def resolve_genres(parent, info):
        return Genres.objects.filter(showgenre__show_id=parent.show_id)

    @staticmethod
    def resolve_users_rating(parent, info):
        return ShowsLogic.compute_show_rate(parent.show_id)

    @staticmethod
    def resolve_current_user_rating(parent, info):
        user_id = info.context.session.get('_auth_user_id')

        try:
            rate_instance = ShowRates.objects.get(
                user_id=user_id, show_id=parent.show_id
            )
        except ShowRates.DoesNotExist:
            return None

        return rate_instance.rating


class ShowRateInput(graphene.InputObjectType):
    show_id = graphene.Int(required=True)
    rating = graphene.Float(required=True)


class ShowQuery(graphene.ObjectType):
    shows = graphene.List(
        ShowsType,
        id=graphene.Int(),
        show_type=graphene.String(),
        page=graphene.Int(),
        order_by=graphene.String(),
        is_random=graphene.Boolean(),
    )

    shows_ratings = graphene.List(RatesType)
    actors = graphene.List(ActorsType, Ra=graphene.Int())
    shows_number_of_pages = graphene.Int(show_type=graphene.String())

    @staticmethod
    def resolve_shows(parent, info, **kwargs):
        number_of_returned_values = 20
        page = kwargs.get('page', 0)
        show_id = kwargs.get('id')
        offset = number_of_returned_values * page
        show_type = kwargs.get('show_type')
        is_random = kwargs.get('is_random')
        order_by = kwargs.get('order_by', 'show_id')

        if show_id:
            return Shows.objects.filter(show_id=show_id)

        elif show_type and is_random:
            return Shows.objects.filter(showtype=show_type).order_by('?')[
                offset : offset + number_of_returned_values
            ]

        elif show_type:
            return Shows.objects.filter(showtype=show_type).order_by(order_by)[
                offset : offset + number_of_returned_values
            ]

        else:
            return Shows.objects.all().order_by(order_by)[
                offset : offset + number_of_returned_values
            ]

    @staticmethod
    def resolve_actors(parent, info):
        return Actors.objects.all()

    @staticmethod
    def resolve_shows_number_of_pages(parent, info, **kwargs):
        number_of_returned_values = 20
        show_type = kwargs.get('show_type')

        if show_type:
            return ceil(
                Shows.objects.filter(showtype=show_type).count()
                / number_of_returned_values
            )
        else:
            return ceil(Shows.objects.all().count() / number_of_returned_values)

    @staticmethod
    def resolve_shows_ratings(parent, info):
        user_id = info.context.session.get('_auth_user_id')
        return ShowRates.objects.filter(user_id=user_id)


class SetShowRate(graphene.Mutation):
    id = graphene.Int()

    class Arguments:
        show_rate_info = ShowRateInput(required=True)

    @staticmethod
    def mutate(parent, info, show_rate_info):
        show_rate_info['user_id'] = info.context.session.get('_auth_user_id')

        rate_id = ShowsLogic(show_rate_info).add_rate_for_show()

        return SetShowRate(id=rate_id)


class DeleteShowRate(graphene.Mutation):
    ok = graphene.Boolean()

    class Arguments:
        show_rate_id = graphene.Int(required=True)

    @staticmethod
    def mutate(parent, info, show_rate_id):
        user_id = info.context.session.get('_auth_user_id')
        ok = ShowsLogic.delete_show_rate(show_id=show_rate_id, user_id=user_id)

        return DeleteShowRate(ok=ok)

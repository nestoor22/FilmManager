from math import ceil

import graphene

from .types import (
    Shows,
    Actors,
    ShowsType,
    ShowRates,
    ShowReview,
    RatesType,
    ActorsType,
    ShowReviewType
)


class ShowQuery(graphene.ObjectType):
    shows = graphene.List(
        ShowsType,
        id=graphene.Int(),
        show_type=graphene.String(),
        page=graphene.Int(),
        order_by=graphene.String(),
        is_random=graphene.Boolean(),
        start_with=graphene.String(),
    )

    show_reviews = graphene.List(ShowReviewType, show_id=graphene.Int())
    shows_ratings = graphene.List(RatesType)
    actors = graphene.List(ActorsType, Ra=graphene.Int())
    shows_number_of_pages = graphene.Int(show_type=graphene.String())

    @staticmethod
    def resolve_shows(parent, info, **kwargs):
        number_of_returned_values = 20
        page = kwargs.get("page", 0)
        show_id = kwargs.get("id")
        offset = number_of_returned_values * page
        show_type = kwargs.get("show_type")
        is_random = kwargs.get("is_random")
        order_by = kwargs.get("order_by", "show_id")
        start_with = kwargs.get("start_with", None)

        if show_id:
            return Shows.objects.filter(show_id=show_id)

        elif start_with is not None:
            return Shows.objects.filter(
                title__istartswith=start_with.lower()
            ).order_by("?")[:11]

        elif show_type and is_random:
            return Shows.objects.filter(showtype=show_type).order_by("?")[
                offset : offset + number_of_returned_values
            ]
        elif is_random:
            return Shows.objects.all().order_by("?")[
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
        show_type = kwargs.get("show_type")

        if show_type:
            return ceil(
                Shows.objects.filter(showtype=show_type).count()
                / number_of_returned_values
            )
        else:
            return ceil(
                Shows.objects.all().count() / number_of_returned_values
            )

    @staticmethod
    def resolve_shows_ratings(parent, info):
        user_id = info.context.session.get("_auth_user_id")
        return ShowRates.objects.filter(user_id=user_id)

    @staticmethod
    def resolve_show_reviews(parent, info, show_id):
        return ShowReview.objects.filter(show_id=show_id)
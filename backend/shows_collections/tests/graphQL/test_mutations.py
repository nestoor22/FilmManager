import json

from graphene_django.utils.testing import GraphQLTestCase
from django.test.client import RequestFactory
from graphene.test import Client
from django.contrib.sessions.middleware import SessionMiddleware

from shows_collections.models import (
    Board, List, BoardLists, BoardFollowers, ListFollowers, ListShowRelation
)

request = RequestFactory().post('/')
SessionMiddleware().process_request(request)
request.session.save()


class CreateBoardMutationTest(GraphQLTestCase):
    pass


class CreateBoardListMutationTest(GraphQLTestCase):
    pass


class CreateSimpleListMutationTest(GraphQLTestCase):
    pass


class AddShowsToListTest(GraphQLTestCase):
    pass


class FollowBoardTest(GraphQLTestCase):
    pass


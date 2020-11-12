import json

from graphene_django.utils.testing import GraphQLTestCase
from django.test.client import RequestFactory
from graphene.test import Client
from django.contrib.sessions.middleware import SessionMiddleware

from FilmManager.schema import schema
from shows_collections.models import (
    Board, List, BoardLists, BoardFollowers, ListFollowers, ListShowRelation
)


request = RequestFactory().post('/')
SessionMiddleware().process_request(request)
request.session.save()

client = Client(schema, context_value=request)


class BoardQueryTestCase(GraphQLTestCase):
    pass


class SipmleListQueryTestCase(GraphQLTestCase):
    pass


class BoardListQueryTestCase(GraphQLTestCase):
    pass

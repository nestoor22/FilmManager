import json

from graphene_django.utils.testing import GraphQLTestCase
from django.test.client import RequestFactory
from graphene.test import Client
from django.contrib.sessions.middleware import SessionMiddleware

from FilmManager.schema import schema
from user.models import User, Followers


request = RequestFactory().post('/')
SessionMiddleware().process_request(request)
request.session.save()

client = Client(schema, context_value=request)


class UserAppQueriesTestCase(GraphQLTestCase):

    def setUp(self) -> None:
        self.requested_user = User.objects.create(
            first_name='Test',
            last_name='query',
            bio='Test case',
            email='requested@user.com'
        )
        self.requested_user.set_password('1231231231')
        self.requested_user.save()

        self.followed_user = User.objects.create(
            first_name='Followed',
            last_name='User',
            bio='Test case',
            email='followed@user.com'
        )

        for i in range(10):
            User.objects.create(
                first_name='Test',
                last_name=i,
                email=f'test{i}@user.com'
            )
            Followers.objects.create(
                follower=self.requested_user,
                followed=self.followed_user
            )

    def test_user_query(self):
        response = self.query(
            '''
            query user($userId: Int){
                user(userId: $userId) {
                    id
                    firstName
                    lastName
                    bio
                    password
                    followed
                    followers
                }
            }
            ''',
            op_name='user',
            variables={'userId': self.requested_user.id}
        )

        content = json.loads(response.content)

        # This validates the status code and if you get errors
        self.assertResponseNoErrors(response)

        user_info = content['data']['user']

        self.assertEquals(
            user_info['firstName'], self.requested_user.first_name
        )
        self.assertEquals(
            user_info['lastName'], self.requested_user.last_name
        )

        # Check password is always empty
        self.assertEquals(user_info['password'], '')

        self.assertEquals(user_info['followed'], 10)
        self.assertEquals(user_info['followers'], 0)

    def test_users_query_limit(self):
        test_limit = 5
        test_offset = 3
        response = self.query(
            '''
            query users($limit: Int, $offset: Int){
                users(limit: $limit, offset: $offset){
                    data {         
                        id
                        firstName
                        lastName
                        bio
                        password
                        followed
                        followers
                    }
                }
            }
            ''',
            op_name='users',
            variables={'limit': test_limit, 'offset': test_offset})

        content = json.loads(response.content)

        # This validates the status code and if you get errors
        self.assertResponseNoErrors(response)

        users_data = content['data']['users']['data']
        self.assertEquals(isinstance(users_data, list), True)
        self.assertEquals(len(users_data), test_limit-test_offset)

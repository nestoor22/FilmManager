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


class TestCreateUserMutation(GraphQLTestCase):
    def test_create_user(self):
        user_data_to_create = {
            'firstName': 'Test',
            'lastName': 'Mutation',
            'email': 'create_user@test.com',
            'password': 'test_password'
        }

        response = self.query(
            '''
              mutation createUser($user: UserInput!, $photo: Upload) {
                createUser(user: $user, photo: $photo) {
                  id
                }
              }
            ''',
            op_name='createUser',
            variables={'user': user_data_to_create})

        content = json.loads(response.content)

        # This validates the status code and if you get errors
        self.assertResponseNoErrors(response)

        created_user = User.objects.get(
            id=content['data']['createUser']['id'])

        self.assertEquals(
            created_user.first_name, user_data_to_create['firstName'])

        self.assertEquals(created_user.last_name,
            user_data_to_create['lastName'])


class TestSubscribeUserMutation(GraphQLTestCase):
    def setUp(self) -> None:
        self.logged_in_user = User.objects.create(
            email='following_user@test.com'
        )

        request.user = self.logged_in_user
        self.client = Client(schema, context_value=request)

        self.followed_user = User.objects.create(
            email='followed_user@test.com'
        )

        request.session['user'] = self.logged_in_user

    def test_subscribe_user(self):
        response = self.client.execute(
            f'''
             mutation {{
                followUser(followedUserId: {self.followed_user.id}) 
                    {{ok}}
            }}
            '''
        )

        self.assertEquals(response.get('errors'), None)
        self.assertEquals(response['data']['followUser']['ok'], True)

        user_followed = Followers.objects.filter(
            follower=self.logged_in_user).count()

        self.assertEquals(user_followed, 1)


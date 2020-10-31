from django.test import TestCase

from user.models import User
from ..tokens import confirm_registration_token


class UserModelTest(TestCase):

    @classmethod
    def setUpTestData(cls):
        User.objects.create(
            email='test_not_active_user@test.com',
            first_name='First',
            last_name='Last'
        )
        User.objects.create(
            email='test_token_activate_user@test.com',
            first_name='First',
            last_name='Last'
        )

    def test_not_active_user(self):
        user = User.objects.get(email='test_not_active_user@test.com')
        self.assertEquals(False, user.is_active)

    def test_token(self):
        user = User.objects.get(email='test_token_activate_user@test.com')

        token = confirm_registration_token.make_token(user)
        activated_user = confirm_registration_token.check_token(None, token)

        self.assertEquals(user.first_name, activated_user.first_name)
        self.assertEquals(activated_user.is_active, True)

    def test_token_format(self):
        user = User.objects.get(email='test_token_activate_user@test.com')
        token = confirm_registration_token.make_token(user)

        self.assertEquals(len(token.split('-')), 3)
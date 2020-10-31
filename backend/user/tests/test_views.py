import datetime

from django.test import TestCase

from django.urls import reverse
from user.models import User


class LoginUserTest(TestCase):

    def setUp(self):
        User.objects.create_user(
            first_name='Test',
            last_name='Test',
            email='test@test.com',
            password='test',
            is_superuser=True,
            is_staff=True,
            is_active=True
        )

    def test_response_if_not_logged_in(self):
        resp = self.client.get('user/')
        self.assertEqual(resp.status_code, 404)

    def test_login_user(self):
        self.client.login(username='test@test.com', password='test')
        resp = self.client.get(reverse('user'))

        self.assertEqual(resp.status_code, 200)

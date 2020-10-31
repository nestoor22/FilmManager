from django.test import TestCase

from user.models import User


class UserModelTest(TestCase):

    @classmethod
    def setUpTestData(cls):
        User.objects.create(first_name='First', last_name='Test')

    def test_first_name_label(self):
        user = User.objects.get(id=1)
        field_label = user._meta.get_field('first_name').verbose_name
        self.assertEquals(field_label,'First name')

    def test_object_name(self):
        user = User.objects.get(id=1)
        expected_object_name = '%s %s' % (user.first_name, user.last_name)
        self.assertEquals(expected_object_name, str(user))

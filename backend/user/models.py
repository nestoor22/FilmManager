from django.db import models
from django.contrib.auth.models import AbstractUser
from .email_manager import EmailUserManager


class User(AbstractUser):
    username = None

    email = models.EmailField('Email', unique=True)
    first_name = models.TextField('First name', max_length=255)
    last_name = models.TextField('Last name', max_length=255)
    bio = models.TextField('Biography', null=True)
    city = models.TextField('City', null=True)
    country = models.TextField('Country', null=True)
    birthday = models.DateField('Birthday', null=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = EmailUserManager()

    class Meta:
        db_table = 'users'
        verbose_name = 'User'

    def __str__(self):
        return f'{self.first_name} {self.last_name}'

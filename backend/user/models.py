from django.db import models
from django.contrib.auth.models import AbstractUser
from .email_manager import EmailUserManager


class User(AbstractUser):
    username = None

    email = models.EmailField('Email', unique=True)
    photo = models.FileField('Photo', null=True, upload_to='media/')
    favorite_show = models.TextField('Favorite show', null=True)
    first_name = models.TextField('First name')
    last_name = models.TextField('Last name')
    bio = models.TextField('Biography', null=True)
    city = models.TextField('City', null=True)
    country = models.TextField('Country', null=True)
    birthday = models.DateField('Birthday', null=True)
    followed = models.IntegerField('Followed', default=0)
    followers = models.IntegerField('Followers', default=0)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = EmailUserManager()

    class Meta:
        db_table = 'users'
        verbose_name = 'User'

    def __str__(self):
        return f'{self.first_name} {self.last_name}'


class Followers(models.Model):
    follower = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='follower_user'
    )

    followed = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='following_user'
    )

    class Meta:
        db_table = 'followers_relations'
        verbose_name = 'Followers'

    def __str__(self):
        return f'{self.follower.email} following {self.follower.email}'

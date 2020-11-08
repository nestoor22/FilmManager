from datetime import datetime

from django.db import models
from django.contrib.postgres.fields import ArrayField

from user.models import User
from show.models import Shows


class Board(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.TextField(null=False)
    created_at = models.DateTimeField(null=True, default=datetime.now)
    description = models.TextField(null=True)
    tags = ArrayField(models.TextField(), null=True)
    followers = models.IntegerField(null=True, default=1)
    shared_times = models.IntegerField(null=True, default=0)
    is_open = models.BooleanField(default=False)

    class Meta:
        db_table = "shows_collections"
        verbose_name = "Board"

    def __str__(self):
        return f"Board-{self.id}"


class List(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.TextField(null=False)
    created_at = models.DateTimeField(null=True, default=datetime.now)
    description = models.TextField(null=True)
    tags = ArrayField(models.TextField(), null=True)
    followers = models.IntegerField(null=True, default=1)
    shared_times = models.IntegerField(null=True, default=0)
    is_open = models.BooleanField(default=False)
    is_outside_board = models.BooleanField(default=True)

    class Meta:
        db_table = 'shows_list'
        verbose_name = 'Shows list'

    def __str__(self):
        return f'List-{self.id}'


class ListShowRelation(models.Model):
    list = models.ForeignKey('shows_collections.List', on_delete=models.CASCADE)
    show = models.ForeignKey(Shows, on_delete=models.CASCADE)

    class Meta:
        db_table = 'list_show_relations'
        verbose_name = 'List show'

    def __str__(self):
        return f'List-{self.list_id} contain show-{self.show_id}'


class BoardLists(models.Model):
    board = models.ForeignKey(Board, on_delete=models.CASCADE)
    list = models.ForeignKey('shows_collections.List', on_delete=models.CASCADE)

    class Meta:
        db_table = "board_lists"
        verbose_name = "Board list"

    def __str__(self):
        return f"Board-{self.board.id} List-{self.list.id}"


class BoardFollowers(models.Model):
    board = models.ForeignKey(Board, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    is_admin = models.BooleanField(default=False, null=True)

    class Meta:
        db_table = "board_followers"
        verbose_name = "Board follower"

    def __str__(self):
        return f"Board-{self.board.id} has follower-{self.user.id}"


class ListFollowers(models.Model):
    list = models.ForeignKey(List, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    is_admin = models.BooleanField(default=False, null=True)

    class Meta:
        db_table = "list_followers"
        verbose_name = "List follower"

    def __str__(self):
        return f"List-{self.list.id} has follower-{self.user.id}"
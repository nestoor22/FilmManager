from datetime import datetime

from django.db import models

from user.models import User
from lists.models import ShowsList


class Board(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.TextField(null=False)
    background_color = models.CharField(null=True, default=None, max_length=40)
    created_at = models.DateTimeField(null=True, default=datetime.now)
    members = models.IntegerField(null=True, default=0)
    shared_times = models.IntegerField(null=True, default=0)
    is_open = models.BooleanField(default=False)
    is_private = models.BooleanField(default=False)

    class Meta:
        db_table = 'boards'
        verbose_name = 'Board'

    def __str__(self):
        return f'Board-{self.id}'


class BoardLists(models.Model):
    board = models.ForeignKey(Board, on_delete=models.CASCADE)
    list = models.ForeignKey(ShowsList, on_delete=models.CASCADE)

    class Meta:
        db_table = 'board_lists'
        verbose_name = 'Board list'

    def __str__(self):
        return f'Board-{self.board.id} List-{self.list.id}'

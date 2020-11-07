from datetime import datetime

from django.db import models

from user.models import User
from lists.models import ShowsList


class Board(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.TextField(null=False)
    created_at = models.DateTimeField(null=True, default=datetime.now)
    description = models.TextField(null=True)
    tags = models.TextField(null=True)
    followers = models.IntegerField(null=True, default=1)
    shared_times = models.IntegerField(null=True, default=0)
    is_open = models.BooleanField(default=False)

    class Meta:
        db_table = "boards"
        verbose_name = "Board"

    def __str__(self):
        return f"Board-{self.id}"


class BoardLists(models.Model):
    board = models.ForeignKey(Board, on_delete=models.CASCADE)
    list = models.ForeignKey(ShowsList, on_delete=models.CASCADE)

    class Meta:
        db_table = "board_lists"
        verbose_name = "Board list"

    def __str__(self):
        return f"Board-{self.board.id} List-{self.list.id}"


class BoardMembers(models.Model):
    board = models.ForeignKey(Board, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        db_table = "board_members"
        verbose_name = "Board member"

    def __str__(self):
        return f"Board-{self.board.id} has member-{self.user.id}"


class BoardFollowers(models.Model):
    board = models.ForeignKey(Board, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    is_admin = models.BooleanField(default=False, null=True)

    class Meta:
        db_table = "board_followers"
        verbose_name = "Board follower"

    def __str__(self):
        return f"Board-{self.board.id} has follower-{self.user.id}"

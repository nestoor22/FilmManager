from datetime import datetime

from django.db import models

from user.models import User
from show.models import Shows


class ShowsList(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.TextField(null=False)
    created_at = models.DateTimeField(null=True, default=datetime.now)
    shared_times = models.IntegerField(null=True, default=0)

    class Meta:
        db_table = 'shows_list'
        verbose_name = 'Shows list'

    def __str__(self):
        return f'List-{self.id}'


class ListShowRelation(models.Model):
    list = models.ForeignKey(ShowsList, on_delete=models.CASCADE)
    show = models.ForeignKey(Shows, on_delete=models.CASCADE)

    class Meta:
        db_table = 'list_show_relations'
        verbose_name = 'List show'

    def __str__(self):
        return f'List-{self.list_id} contain show-{self.show_id}'

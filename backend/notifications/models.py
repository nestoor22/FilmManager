from django.db import models

from user.models import User


NOTIFICATIONS_TYPES = (
    ('new_follower', 'New follower'),
    ('updates', 'Updates'),
    ('collection_updated', 'Collection Updated')
)


class Notification(models.Model):
    type = models.CharField(
        choices=NOTIFICATIONS_TYPES,
        null=False,
        max_length=155
    )

    receiver = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.TextField()
    received_at = models.DateTimeField()

    class Meta:
        db_table = 'notifications'

    def __str__(self):
        return f'{self.id}-{self.type}'

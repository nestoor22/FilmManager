from datetime import datetime

from django.db import models

from user.models import User


class Chat(models.Model):
    chat_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=155, default='')
    descripion = models.CharField(max_length=512, default='')


class ChatMembers(models.Model):
    chat = models.ForeignKey(Chat, on_delete=models.DO_NOTHING)
    member = models.ForeignKey(User, on_delete=models.CASCADE)


class ChatMessages(models.Model):
    chat = models.ForeignKey(Chat, on_delete=models.DO_NOTHING)
    sender_id = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.TextField(default='')
    media = models.FileField(upload_to='messages_media/', null=True)
    is_read = models.BooleanField(default=False)
    date = models.DateTimeField(default=datetime.now)
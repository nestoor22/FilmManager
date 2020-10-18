from datetime import datetime

from django.db import models
from django.utils.functional import cached_property
from django.apps import apps

from user.models import User


class Chat(models.Model):
    id = models.AutoField(primary_key=True)
    chat_id = models.CharField(max_length=155, default='')
    name = models.CharField(max_length=155, default='')
    descripion = models.CharField(max_length=512, default='')
    identifier = models.CharField(max_length=155, default='')
    is_group = models.BooleanField(default=False)
    created_at = models.DateTimeField(default=datetime.now)

    class Meta:
        db_table = 'chats'
        verbose_name_plural = 'Chats'

    def __str__(self):
        return f'Chat-{self.chat_id}/{self.name}'

    @cached_property
    def last_message(self):
        chat_messages_model = apps.get_model('chat', 'ChatMessages')
        last_message_instance = chat_messages_model.objects.last()
        if last_message_instance:
            return last_message_instance.content
        else:
            return 'No messages'

    @cached_property
    def members(self):
        chat_members_model = apps.get_model('chat', 'ChatMembers')
        members_ids = chat_members_model.objects.filter(
            chat_id=self.id).values_list('member', flat=True)

        return User.objects.filter(id__in=members_ids)

    def chat_name_for_requested_user(self, user_id):
        if self.is_group:
            return self.name
        else:
            chat_members = apps.get_model('chat', 'ChatMembers')
            member = chat_members.objects.filter(
                chat_id=self.id).exclude(member_id=user_id)
            if member:
                member_instance = member.first().member
                return f'{member_instance.first_name} ' \
                       f'{member_instance.last_name}'


class ChatMembers(models.Model):
    chat = models.ForeignKey(Chat, on_delete=models.DO_NOTHING)
    member = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        db_table = 'chat_members'
        verbose_name_plural = 'Chat Members'

    def __str__(self):
        return f'Chat-{self.chat_id}/User-{self.member_id}'


class ChatMessages(models.Model):
    chat = models.ForeignKey(Chat, on_delete=models.DO_NOTHING)
    sender_id = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.TextField(default='')
    media = models.FileField(upload_to='messages_media/', null=True)
    is_read = models.BooleanField(default=False)
    date = models.DateTimeField(default=datetime.now)

    class Meta:
        db_table = 'chat_messages'
        verbose_name_plural = 'Chat Messages'

    def __str__(self):
        return f'Chat-{self.chat_id}/User-{self.sender_id}'

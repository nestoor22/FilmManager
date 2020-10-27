import json
from channels.generic.websocket import AsyncWebsocketConsumer
from asgiref.sync import sync_to_async

from .models import ChatMessages, Chat
from serializers.customSerializer import CustomSerializer


class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        # Join room group
        self.chat_id = self.scope['url_route']['kwargs']['chat_id']
        self.room_group_name = 'chat_%s' % self.chat_id.split('-')[0]

        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )
        await self.accept()

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    async def receive(self, text_data=None, bytes_data=None):
        text_data_json = json.loads(text_data)

        chat_obj = await sync_to_async(
            Chat.objects.get, thread_sensitive=True
        )(chat_id=self.chat_id)

        chat_message = await sync_to_async(
            ChatMessages.objects.create, thread_sensitive=True
        )(chat=chat_obj,
          sender_id=text_data_json['senderId'],
          text=text_data_json['message']
          )

        results = await sync_to_async(
            CustomSerializer(None).serialize,
            thread_sensitive=True
        )([chat_message])

        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'chat_message',
                'message': results
            }
        )

    async def chat_message(self, event):
        message = event['message']
        await self.send(text_data=json.dumps({
            'message': message
        }))
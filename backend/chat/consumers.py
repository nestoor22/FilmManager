import json
from channels.generic.websocket import AsyncWebsocketConsumer
from asgiref.sync import sync_to_async

from .models import ChatMessages
from .serializers.customSerializer import CustomSerializer


class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        # Join room group
        self.chat_id = self.scope['url_route']['kwargs']['chat_id']
        self.room_group_name = 'chat_%s' % self.chat_id.split('-')[0]

        chat_messages = await sync_to_async(
            ChatMessages.objects.filter, thread_sensitive=True
        )(chat__chat_id=self.chat_id)

        results = await sync_to_async(
            CustomSerializer(None).serialize, thread_sensitive=True
        )(chat_messages[:20])

        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )
        await self.accept()
        await self.send(results)

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    async def receive(self, text_data):
        text_data_json = json.loads(text_data)

        message = text_data_json['message']

        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'chat_message',
                'message': message
            }
        )

    async def chat_message(self, event):
        message = event['message']

        await self.send(text_data=json.dumps({
            'message': message
        }))
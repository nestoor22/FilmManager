from django.urls import re_path
from consumers.chat import consumer

websocket_urlpatterns = [
    re_path(r'chat/(?P<chat_id>[^/]+)/$', consumer.ChatConsumer),
]
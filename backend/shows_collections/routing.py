from django.urls import re_path
from consumers.notifications import consumer

websocket_urlpatterns = [
    re_path(
        r'notifications/$',
        consumer.NotificationsConsumer
    ),
]
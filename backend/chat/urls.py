from django.urls import path

from . import views

urlpatterns = [
    path('chats/', views.get_chats, name='get_user_chats'),
    path('startChat/', views.create_chat, name='create_chat'),
    path('user/', views.get_user, name='user'),
    path('messages/', views.get_messages, name='get_messages')
]

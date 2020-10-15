import json

from django.core import serializers
from django.shortcuts import HttpResponse
from django.views.decorators.http import require_http_methods

from .models import Chat, ChatMembers


def room(request, room_name):
    return HttpResponse(content=room_name)


@require_http_methods(["POST"])
def create_chat(request):
    request_body_obj = json.loads(request.body.decode('utf-8'))
    new_chat = Chat.objects.create()
    ChatMembers.objects.bulk_create([
        ChatMembers(
            chat_id=new_chat.chat_id,
            member_id=request.user.id
        ),
        ChatMembers(
            chat_id=new_chat.chat_id,
            member_id=request_body_obj['contactId']
        )]
    )

    return HttpResponse(content={}, status=200)


@require_http_methods(['GET'])
def get_chats(request):
    user_chats = Chat.objects.filter(chatmembers__member_id=request.user.id)
    print(user_chats)
    for chat in user_chats:
        print(chat.get_app)
    return HttpResponse(
        content=serializers.serialize('json', user_chats), status=200)
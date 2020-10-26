import json

from django.shortcuts import HttpResponse
from django.views.decorators.http import require_http_methods
from django.contrib.auth.decorators import login_required

from .models import Chat, ChatMembers, ChatMessages
from .tokens import ChatIdGenerator
from .serializers.customSerializer import CustomSerializer


@login_required
@require_http_methods(["POST"])
def create_chat(request):
    request_body_obj = json.loads(request.body.decode('utf-8'))

    new_chat = Chat.objects.create()

    ChatMembers.objects.bulk_create([
        ChatMembers(
            chat_id=new_chat.id,
            member_id=request.user.id
        ),
        ChatMembers(
            chat_id=new_chat.id,
            member_id=request_body_obj['contactId']
        )]
    )

    new_chat.chat_id = ChatIdGenerator().make_token(new_chat)
    new_chat.save()

    return HttpResponse(content={}, status=200)


def room(request, room_name):
    return HttpResponse(content=room_name)


@login_required
@require_http_methods(['GET'])
def get_chats(request):
    user_chats = Chat.objects.filter(chatmembers__member_id=request.user.id)

    response_data = CustomSerializer(request.user.id).serialize(user_chats)

    return HttpResponse(content=response_data, status=200)


@login_required
@require_http_methods(['GET'])
def get_user(request):
    response_data = CustomSerializer(
        request.user.id).serialize([request.user])

    return HttpResponse(content=response_data, status=200)


@login_required
@require_http_methods(["GET"])
def get_messages(request):
    offset = request.GET.get('offset', 0)
    limit = request.GET.get('limit', 40)
    messages = ChatMessages.objects.filter(
        chat__chat_id=request.GET.get('id', '')
    )[offset:limit]

    response_data = CustomSerializer(request.user.id).serialize(messages)
    return HttpResponse(content=response_data, status=200)

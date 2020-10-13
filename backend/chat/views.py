from django.shortcuts import render, HttpResponse


def room(request, room_name):
    return HttpResponse(content=room_name)

from django.shortcuts import HttpResponse
from django.contrib.auth import logout


def logOutUser(request):
    logout(request)
    return HttpResponse(status=200)

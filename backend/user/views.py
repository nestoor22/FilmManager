from django.shortcuts import HttpResponse
from django.contrib.auth import logout


def log_out_user(request):
    logout(request)
    return HttpResponse(status=302)

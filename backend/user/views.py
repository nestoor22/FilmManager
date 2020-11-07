from django.shortcuts import HttpResponse, HttpResponseRedirect
from django.contrib.auth import logout, login
from django.views.decorators.http import require_http_methods
from django.contrib.auth.decorators import login_required

from serializers.customSerializer import CustomSerializer
from .tokens import confirm_registration_token
from FilmManager.settings import HOST


def log_out_user(request):
    logout(request)
    return HttpResponse(status=302)


@login_required
@require_http_methods(['GET'])
def get_user(request):
    response_data = CustomSerializer(
        request.user.id).serialize([request.user])

    return HttpResponse(content=response_data, status=200)


@require_http_methods(['GET'])
def confirm_registration(request, token=''):
    user_obj = confirm_registration_token.check_token(user=None, token=token)
    if not user_obj:
        return HttpResponse(status=404)

    login(
        request=request,
        user=user_obj,
        backend='django.contrib.auth.backends.ModelBackend'
    )

    return HttpResponseRedirect(redirect_to=HOST)

from django.shortcuts import HttpResponse
from django.contrib.auth import logout
from django.views.decorators.http import require_http_methods
from django.contrib.auth.decorators import login_required

from serializers.customSerializer import CustomSerializer


def log_out_user(request):
    logout(request)
    return HttpResponse(status=302)


@login_required
@require_http_methods(['GET'])
def get_user(request):
    response_data = CustomSerializer(
        request.user.id).serialize([request.user])

    return HttpResponse(content=response_data, status=200)

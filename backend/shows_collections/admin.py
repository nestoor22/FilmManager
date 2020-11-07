from django.contrib import admin

from .models import Board, BoardLists, BoardFollowers

admin.site.register(Board)
admin.site.register(BoardLists)
admin.site.register(BoardFollowers)
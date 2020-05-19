from django.contrib import admin

from .models import Board, BoardLists, BoardMembers

admin.site.register(Board)
admin.site.register(BoardLists)
admin.site.register(BoardMembers)
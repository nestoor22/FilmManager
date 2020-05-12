from django.contrib.admin import ModelAdmin
from django.contrib import admin
from django import forms

from .models import User


class UserCreationForm(forms.ModelForm):
    class Meta:
        model = User
        fields = (
            'email',
            'first_name',
            'last_name',
        )


class UserAdmin(ModelAdmin):
    form = UserCreationForm

    model = User

    list_display = (
        'email',
        'first_name',
        'last_name',
    )
    list_filter = (
        'email',
        'first_name',
        'last_name',
    )

    ordering = ['id']

    def get_readonly_fields(self, request, obj=None):
        if obj:
            return [
                'email',
            ]
        else:
            return []


admin.site.register(User, UserAdmin)

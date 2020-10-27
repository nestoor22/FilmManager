import json
import datetime

from django.db import models
from django.db.models.fields.files import FieldFile

from .base import BaseCustomSerializer
from chat.models import Chat


class CustomSerializer(BaseCustomSerializer):
    def start_serialization(self):
        self.objects = []
        self._current = None
        self.stream.write('[')

    def end_serialization(self):
        self.stream.write("]")

    def start_object(self, obj):
        self._current = {}
        
        if isinstance(obj, Chat) and not self._current.get('chatName'):
            self.set_chat_name(obj)

    def end_object(self, obj):
        if not self.first:
            self.stream.write(",")

        json.dump(self._current, self.stream)

        self._current = None

    def _value_from_field(self, obj, field):
        value = getattr(obj, field, '')
        if isinstance(value, models.QuerySet):
            value = json.loads(CustomSerializer(self.user_id).serialize(value))
        elif isinstance(value, models.Model):
            value = json.loads(CustomSerializer(self.user_id).serialize([value]))


        if isinstance(value, datetime.datetime):
            value = value.strftime("%Y/%m/%d %H:%M")
        if isinstance(value, datetime.date):
            value = value.strftime("%Y/%m/%d")
        if isinstance(value, FieldFile):
            try:
                value = value.instance.photo.path.url
            except ValueError:
                value = ''
            except AttributeError:
                value = ''

        return value

    def handle_field_value(self, obj, field):
        camel_style_field_name = self.convert_field_to_camel_style(field)
        self._current[camel_style_field_name] = \
            self._value_from_field(obj, field)

    def set_chat_name(self, obj):
        self._current['chatName'] = obj.chat_name_for_requested_user(
            self.user_id)

    @staticmethod
    def convert_field_to_camel_style(field_name):
        def camelcase(index, value):
            if index == 0:
                return value
            else:
                return value.capitalize()

        camelcase_field_name = "".join(
            camelcase(index, value)
            for index, value in enumerate(field_name.split("_"))
        )

        return camelcase_field_name

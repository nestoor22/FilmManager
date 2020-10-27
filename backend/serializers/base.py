from abc import ABC
from io import StringIO

from django.db import models
from django.utils.functional import cached_property


class BaseCustomSerializer(ABC):
    exclude_fields = ('password', )

    def __init__(self, user_id):
        self.first = True
        self.stream = StringIO()
        self.objects = []
        self._current = None
        self.user_id = user_id

    def serialize(self, queryset):
        """
        Serialize a queryset.
        """

        self.start_serialization()

        for obj in queryset:
            self.start_object(obj)
            fields = [field.name for field in obj._meta.local_fields]
            properties = [
                obj_attr for obj_attr in dir(obj._meta.model)
                if isinstance(
                    getattr(obj._meta.model, obj_attr),
                    (cached_property, property))
            ]
            fields_to_serialize = fields + properties

            for field in fields_to_serialize:
                if field not in self.exclude_fields:
                    self.handle_field_value(obj, field)

            self.end_object(obj)
            self.first = False

        self.end_serialization()
        return self.getvalue()

    def start_serialization(self):
        """
        Called when serializing of the queryset starts.
        """
        raise NotImplementedError()

    def end_serialization(self):
        raise NotImplementedError()

    def start_object(self, obj):
        raise NotImplementedError()

    def end_object(self, obj):
        raise NotImplementedError()

    def handle_field_value(self, obj, field):
        raise NotImplementedError()

    def _value_from_field(self, obj, field):
        raise NotImplementedError()

    def getvalue(self):
        if callable(getattr(self.stream, 'getvalue', None)):
            return self.stream.getvalue()



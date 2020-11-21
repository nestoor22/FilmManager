from abc import ABC, abstractmethod

from django.contrib.auth import get_user_model

from ..models import Notification


class BaseNotificationStrategy(ABC):
    model = Notification

    def __init__(self, user_id, notification_id=None, notification_info=None):
        self.user_id = user_id
        self.notification_id = notification_id
        self.notification_info = notification_info

    @abstractmethod
    def create(self):
        raise NotImplemented()

    @abstractmethod
    def prepare_notification_message(self):
        raise NotImplemented()

    def get_trigger_user_obj(self):
        return get_user_model().objects.get(
            id=self.notification_info['triggerUserId'])
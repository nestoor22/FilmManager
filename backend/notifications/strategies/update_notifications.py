from .base import BaseNotificationStrategy


class UpdatesNotificationStrategy(BaseNotificationStrategy):
    notification_type = 'updates'

    def create(self):
        pass

    def prepare_notification_message(self):
        pass

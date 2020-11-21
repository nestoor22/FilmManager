from .base import BaseNotificationStrategy


class FollowerNotificationStrategy(BaseNotificationStrategy):
    notification_type = 'new_follower'

    def create(self):
        pass

    def prepare_notification_message(self):
        pass

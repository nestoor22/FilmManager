from .follower_notification import FollowerNotificationStrategy
from .collections_notifications import CollectionsNotificationStrategy
from .update_notifications import UpdatesNotificationStrategy


def get_strategy(type):
    if type == 'collection_updated':
        return CollectionsNotificationStrategy
    elif type == 'updates':
        return UpdatesNotificationStrategy
    elif type == 'new_follower':
        return FollowerNotificationStrategy


class NotificationsContext(object):
    def __init__(self, user_id, notification_id=None, notification_info=None):
        self.strategy = get_strategy(notification_info['type'])(
            user_id, notification_id, notification_info)

    def create(self):
        return self.strategy.create()

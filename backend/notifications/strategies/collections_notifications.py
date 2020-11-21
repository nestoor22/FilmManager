from datetime import datetime

from .base import BaseNotificationStrategy
from shows_collections.models import BoardFollowers, ListFollowers


class CollectionsNotificationStrategy(BaseNotificationStrategy):
    notification_type = 'collection_updated'

    def create(self):
        message = self.prepare_notification_message()
        creation_time = datetime.now()

        notification_objects = []
        for receiver in self.get_receivers():
            notification_objects.append(
                self.model(
                    type=self.notification_type,
                    text=message,
                    receiver=receiver,
                    received_at=creation_time
                )
            )

        self.model.objects.bulk_create(notification_objects)

        return message

    def prepare_notification_message(self):
        triggerer = self.get_trigger_user_obj()

        return f'{triggerer.first_name} {triggerer.last_name} ' \
               f'add new show to {self.notification_info["collectionName"]}'

    def get_receivers(self):
        if 'boardId' in self.notification_info:
            return BoardFollowers.objects.filter(
                board_id=self.notification_info['boardID'])
        elif 'listId' in self.notification_info:
            return ListFollowers.objects.filter(
                list_id=self.notification_info['listId'])

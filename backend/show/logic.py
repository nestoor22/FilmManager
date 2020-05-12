from django.db.models import Avg

from .models import ShowRates


class ShowsLogic(object):
    def __init__(self, data):
        self.data = data

    def add_rate_for_show(self):
        show_rate_instance = ShowRates.objects.filter(
            user_id=self.data.get('user_id'), show_id=self.data.get('show_id')
        )

        if show_rate_instance:
            show_rate_instance.update(**self.data)
            return self.data.get('show_id')
        else:
            show_rate_instance = ShowRates.objects.create(**self.data)
            return show_rate_instance.id

    @staticmethod
    def compute_show_rate(show_id):
        return ShowRates.objects.filter(show_id=show_id).aggregate(Avg('rating'))[
            'rating__avg'
        ]

    @staticmethod
    def delete_show_rate(show_id, user_id):
        ShowRates.objects.filter(show_id=show_id, user_id=user_id).delete()
        return True

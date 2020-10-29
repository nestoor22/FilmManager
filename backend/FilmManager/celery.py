import os

from celery import Celery

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'FilmManager.settings')

app = Celery('FilmManager')
app.config_from_object('django.conf:settings', namespace='CELERY')
app.conf.broker_url = 'redis://localhost:6379/0'

app.autodiscover_tasks()

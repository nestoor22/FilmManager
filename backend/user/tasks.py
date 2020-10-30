from FilmManager.celery import app
from .email_services.email_services_context import EmailServicesContext


@app.task
def async_email(subject, to_emails):
    email_service = EmailServicesContext(subject, to_emails)
    email_service.send()


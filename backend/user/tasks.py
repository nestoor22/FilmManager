from celery import shared_task
from .email_services.email_services_context import EmailServicesContext


@shared_task
def async_email(subject, to_emails):
    email_service = EmailServicesContext(subject, to_emails)
    email_service.send()


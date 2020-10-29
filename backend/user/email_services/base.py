from abc import ABC, abstractmethod

from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

from user.models import User
from FilmManager.settings import SEND_GRID_API_KEY, EMAIL_SENDER


class BaseEmailService(ABC):
    email_api_client = SendGridAPIClient(SEND_GRID_API_KEY)
    email_message_obj = Mail

    def __init__(self, subject, to_emails):
        self.subject = subject
        self.to_emails = to_emails
        self.content = ''

    @abstractmethod
    def get_mail_content(self, recipient_email):
        raise NotImplemented()

    @abstractmethod
    def validate_subscription(self):
        raise NotImplemented()

    @abstractmethod
    def send(self):
        raise NotImplemented()

    @staticmethod
    def get_recipient_info(recipient_email) -> User or None:
        try:
            return User.objects.get(email=recipient_email)
        except User.DoesNotExist:
            return None

    def create_message_obj(self, recipient):
        self.get_mail_content(recipient)
        if not self.content:
            return

        return self.email_message_obj(
            from_email=EMAIL_SENDER,
            to_emails=[recipient],
            plain_text_content=self.content,
            subject=self.subject
        )

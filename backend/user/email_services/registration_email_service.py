from .base import BaseEmailService

from ..tokens import confirm_registration_token
from .email_templates.confirmation_email import CONFIRMATION_EMAIL_TEMPLATE
from FilmManager.settings import HOST


class RegistrationEmailServiceStrategy(BaseEmailService):
    def get_mail_content(self, recipient_email):
        recipient_info = self.get_recipient_info(recipient_email)
        if not recipient_info:
            return

        token = confirm_registration_token.make_token(recipient_info)
        self.content = CONFIRMATION_EMAIL_TEMPLATE.format(
            first_name=recipient_info.first_name,
            last_name=recipient_info.last_name,
            confirmation_link=f'{HOST}/confirm/{token}'
        )

    def send(self):
        if not self.validate_subscription():
            return

        self.subject = 'ShareWithMe Confirm Registration'

        for recipient in self.to_emails:
            message_obj = self.create_message_obj(recipient)
            self.email_api_client.send(message_obj)

    def validate_subscription(self):
        return True

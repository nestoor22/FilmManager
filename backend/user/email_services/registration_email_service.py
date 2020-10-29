from .base import BaseEmailService


class RegistrationEmailServiceStrategy(BaseEmailService):
    def get_mail_content(self, recipient_email):
        recipient_info = self.get_recipient_info(recipient_email)
        if not recipient_info:
            return

        self.content = f'Hi, {recipient_info.first_name}'

    def send(self):
        if not self.validate_subscription():
            return

        for recipient in self.to_emails:
            message_obj = self.create_message_obj(recipient)
            self.email_api_client.send(message_obj)

    def validate_subscription(self):
        return True

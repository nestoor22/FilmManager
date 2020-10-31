from .registration_email_service import RegistrationEmailServiceStrategy


def get_email_service_strategy(email_subject):
    if email_subject == 'registration':
        return RegistrationEmailServiceStrategy
    else:
        raise NameError()


class EmailServicesContext(object):
    def __init__(self, subject, to_emails):
        self.strategy = get_email_service_strategy(subject)(
            subject, to_emails)

    def send(self):
        return self.strategy.send()

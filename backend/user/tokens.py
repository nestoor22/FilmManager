import time
import six

from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.crypto import constant_time_compare
from django.utils.http import base36_to_int
from FilmManager import settings


class ConfirmRegistrationToken(PasswordResetTokenGenerator):
    def _make_hash_value(self, user, timestamp):
        login_timestamp = '' if user.last_login is None \
            else user.last_login.replace(microsecond=0, tzinfo=None)

        return (
                six.text_type(user.pk) + user.password +
                six.text_type(login_timestamp) + six.text_type(timestamp)
        )


class ResetPasswordTokenGenerator(PasswordResetTokenGenerator):

    def make_token(self, user):
        """
        Return a token that can be used once to do a password reset
        for the given user.
        """
        return super()._make_token_with_timestamp(user, int(time.time()))

    def check_token(self, user, token):
        if not (user and token):
            return False

        try:
            ts_b36, _ = token.split("-")
        except ValueError:
            return False

        try:
            ts = base36_to_int(ts_b36)
        except ValueError:
            return False

        if not constant_time_compare(
                self._make_token_with_timestamp(user, ts), token):
            return False

        if (int(time.time()) - ts) > settings.PASSWORD_RESET_TIMEOUT_SECONDS:
            return False

        return True

    def _make_hash_value(self, user, timestamp):
        login_timestamp = '' if user.last_login is None else user.last_login.replace(
            microsecond=0, tzinfo=None)

        return (
                six.text_type(user.pk) + user.password +
                six.text_type(login_timestamp) + six.text_type(timestamp)
        )


confirm_registration_token = ConfirmRegistrationToken()
reset_password_token = ResetPasswordTokenGenerator()

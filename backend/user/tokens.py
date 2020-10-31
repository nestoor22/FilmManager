import time
import six

from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.crypto import constant_time_compare, salted_hmac
from django.utils.http import base36_to_int, int_to_base36
from django.contrib.auth import authenticate, login

from .models import User
from FilmManager import settings


class ConfirmRegistrationToken(PasswordResetTokenGenerator):

    def _make_hash_value(self, user, timestamp):
        print(user)
        return (
                six.text_type(user.pk) + user.password +
                six.text_type(timestamp)
        )

    def _make_token_with_timestamp(self, user, timestamp, legacy=False):
        ts_b36 = int_to_base36(timestamp)
        user_id_b36 = int_to_base36(user.id)

        hash_string = salted_hmac(
            self.key_salt,
            self._make_hash_value(user, timestamp),
            secret=self.secret,
            algorithm='sha1' if legacy else self.algorithm,
        ).hexdigest()[::2]  # Limit to 20 characters to shorten the URL.

        return "%s-%s-%s" % (ts_b36, user_id_b36, hash_string)

    def check_token(self, user, token):
        try:
            ts_b36, user_id_b36, _ = token.split("-")
        except ValueError:
            return False

        try:
            ts = base36_to_int(ts_b36)
        except ValueError:
            return False

        try:
            user_id = base36_to_int(user_id_b36)
            user_obj = User.objects.get(id=user_id)
        except ValueError:
            return False
        except User.DoesNotExist:
            return False

        if not constant_time_compare(
                self._make_token_with_timestamp(user_obj, ts), token):
            return False

        if (self._num_seconds(self._now()) - ts) > \
                settings.PASSWORD_RESET_TIMEOUT_SECONDS:
            return False

        user_obj.is_active = True
        user_obj.save()

        return user_obj


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

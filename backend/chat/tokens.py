from datetime import datetime
from django.utils.crypto import constant_time_compare, salted_hmac
from django.utils.http import base36_to_int, int_to_base36


class ChatIdGenerator:
    key_salt = "django.contrib.auth.tokens.PasswordResetTokenGenerator"

    def make_token(self, chat):
        """
        Return a token that can be used once to do a booking cancellation
        """
        return self.make_token_with_timestamp(
            chat=chat,
            members=chat.members,
            timestamp=int(
                (chat.created_at - datetime(year=1970, month=1, day=1)
                 ).seconds),
        )

    def check_token(self, chat, token, requested_user):
        if not (chat and token):
            return False

        try:
            timestamp_in_base36, hash_string = token.split("-")
        except ValueError:
            return False

        try:
            seconds = base36_to_int(timestamp_in_base36)
        except ValueError:
            return False

        try:
            hashed_users_ids_sum = int(hash_string.split('$')[1])
        except ValueError or IndexError:
            return False

        chat_members_sum = sum([member.id for member in chat.members
                                if member.id != requested_user.id])

        if (hashed_users_ids_sum - chat_members_sum) != requested_user.id:
            return False

        if not constant_time_compare(
            self.make_token_with_timestamp(chat, chat.members, seconds), token
        ):
            return False

        return True

    def make_token_with_timestamp(self, chat, members, timestamp):
        token = int_to_base36(timestamp)
        members_hash_string = int_to_base36(
            sum([member.id for member in members])
        )

        hash_string = (
            salted_hmac(self.key_salt, self.make_hash_value(chat, timestamp))
            .hexdigest()
            .replace("$", "")
        )

        part_hash_string_length = len(hash_string) // 4
        new_hash = (
            hash_string[:part_hash_string_length]
            + f"${members_hash_string}$"
            + hash_string[part_hash_string_length: part_hash_string_length * 2]
        )

        token += f"-{new_hash}"

        return token

    @staticmethod
    def make_hash_value(chat, timestamp):
        creation_timestamp = chat.created_at.replace(
            microsecond=0, tzinfo=None
        )

        return f"{chat.id}{chat.name}{creation_timestamp}{timestamp}"


cancellation_token = ChatIdGenerator()

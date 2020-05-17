import { isEmail } from 'utils/validators';

const validate = (values) => {
  const errors = {};
  if (values.invitedFriends) {
    values.invitedFriends.forEach((email) => {
      if (isEmail(email || '', true)) {
        errors.invitedFriends = 'Some emails are incorrect';
      }
    });
  }

  return errors;
};

export default validate;

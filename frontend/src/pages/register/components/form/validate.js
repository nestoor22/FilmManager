import { isRequired, isEmail } from '../../../../utils/validators';

const validate = (values) => {
  const errors = {};

  if (values.password !== values.confirmPassword) {
    errors.password = 'Passwords are not the same. Please check again';
    errors.confirmPassword = 'Passwords are not the same. Please check again';
  }

  if (isRequired(values.password || '', true)) {
    errors.password = 'Password is required';
  }
  if (isRequired(values.firstName || '', true)) {
    errors.firstName = 'First name is required';
  }

  if (isRequired(values.lastName || '', true)) {
    errors.lastName = 'Last name is required';
  }

  if (isRequired(values.email || '', true)) {
    errors.email = 'Email is required';
  } else if (isEmail(values.email || '', true)) {
    errors.email = 'Invalid email';
  }

  return errors;
};

export default validate;

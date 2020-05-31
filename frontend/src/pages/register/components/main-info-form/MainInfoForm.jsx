import React from 'react';
import { Field, reduxForm } from 'redux-form';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { IconButton, InputAdornment } from '@material-ui/core';

import { Input, FormButtons } from 'components';

import validate from './validate';

import useStyles from './styles';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const MainInfoForm = ({ handleSubmit }) => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = React.useState(false);

  const onShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={classes.registerForm}>
      <form onSubmit={handleSubmit}>
        <div className={classes.inlineFieldsWrapper}>
          <Field
            name="firstName"
            placeholder="First name"
            label="First name *"
            inputClass={classes.nameField}
            component={Input}
          />
          <Field
            name="lastName"
            placeholder="Last name"
            label="Last name *"
            inputClass={classes.nameField}
            component={Input}
          />
        </div>
        <Field
          name="email"
          placeholder="Email"
          label="Email *"
          className={classes.inputIndent}
          component={Input}
        />
        <Field
          name="password"
          className={classes.inputIndent}
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          label="Password *"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                className={classes.showIcon}
                onClick={onShowPasswordClick}
              >
                {showPassword ? (
                  <Visibility className={classes.passwordIcon} />
                ) : (
                  <VisibilityOff className={classes.passwordIcon} />
                )}
              </IconButton>
            </InputAdornment>
          }
          autoComplete="new-password"
          component={Input}
        />
        <Field
          name="confirmPassword"
          type="password"
          className={classes.inputIndent}
          placeholder="Confirm password"
          label="Confirm password *"
          autoComplete="new-password"
          component={Input}
        />
        <FormButtons
          actionBtnClass={classes.actionBtnClass}
          buttonWrapperClass={classes.buttonWrapper}
          actionLabel="Next"
        />
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'mainInfoForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: false,
  touchOnBlur: false,
  initialValues,
  validate,
})(MainInfoForm);

import React from 'react';
import { Field, reduxForm } from 'redux-form';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { IconButton, InputAdornment, Typography } from '@material-ui/core';

import {
  Input,
  TextInput,
  SingleDatePicker,
  CustomCityPicker,
  CustomCountryPicker,
  FormButtons,
} from 'components';

import validate from './validate';

import useStyles from '../styles';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  bio: '',
  city: '',
  country: '',
  birthday: null,
};

const RegisterPage = ({ handleSubmit }) => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = React.useState(false);

  const onShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  document.body.style.backgroundColor = '#254052';

  return (
    <div className={classes.registerForm}>
      <Typography className={classes.title} variant="h1">
        Register
      </Typography>

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
        <Field
          className={classes.inputIndent}
          name="bio"
          placeholder="Tell something about you"
          label="Tell something about you"
          component={TextInput}
        />
        <Field
          className={classes.inputIndent}
          name="birthday"
          disableFuture={true}
          placeholder="Tell something about you"
          label="Birthday"
          component={SingleDatePicker}
        />
        <div className={classes.inlineFieldsWrapper}>
          <Field
            className={classes.inputIndent}
            name="country"
            label="Country"
            component={CustomCountryPicker}
          />
          <Field
            className={classes.inputIndent}
            name="city"
            country={'Ukraine'}
            label="City"
            component={CustomCityPicker}
          />
        </div>
        <FormButtons actionLabel="Create account" />
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'registerForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: false,
  touchOnBlur: false,
  touchOnChange: true,
  initialValues,
  validate,
})(RegisterPage);

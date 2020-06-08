import React from 'react';

import { useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';

import { useSnackbar } from 'notistack';

import { useField, useForm } from 'hooks';
import {
  Typography,
  Button,
  InputAdornment,
  IconButton,
} from '@material-ui/core';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import { SimpleInput } from 'components';
import {
  SIGN_IN_MUTATION,
  SIGN_IN_WITH_GOOGLE_MUTATION,
} from 'graphql/mutations/auth';
import { isRequired, isEmail, isValidPassword } from 'utils/validators';

import background from 'assets/background.jpg';
import emailIcon from 'assets/icons/email.svg';
import passwordIcon from 'assets/icons/password.svg';

import useStyles from './styles';

const SignIn = () => {
  const classes = useStyles();

  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const [signIn] = useMutation(SIGN_IN_MUTATION);
  const [signInWithGoogle] = useMutation(SIGN_IN_WITH_GOOGLE_MUTATION);

  document.body.style.background = `url(${background})`;
  document.body.style.backgroundSize = `cover`;

  const loginForm = useForm({
    onSubmit: (formData, formValid) => {
      if (!formValid) return;

      signIn({
        variables: { email: formData.email, password: formData.password },
      }).then(
        () => history.push('/'),
        () => {
          passwordField.setError(
            'Email or password is incorrect, please try again'
          );
          emailField.setError('');
        }
      );
    },
  });

  const [showPassword, setShowPassword] = React.useState(false);
  const onShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const emailField = useField('email', loginForm, {
    defaultValue: '',
    validations: [
      (formData) => isRequired(formData.email, 'Email is required'),
      (formData) => isEmail(formData.email, 'Invalid email'),
    ],
  });

  const passwordField = useField('password', loginForm, {
    defaultValue: '',
    validations: [
      (formData) => isRequired(formData.password, 'Password is required'),
      (formData) =>
        isValidPassword(
          formData.password,
          'The password must include at least 8 characters with 1 symbol, 1 digit, 1 uppercase letter, 1 lowercase letter'
        ),
    ],
  });
  const responseGoogle = (response) => {
    signInWithGoogle({
      variables: {
        accessToken: response.getAuthResponse().id_token,
        user: {
          firstName: response.profileObj.givenName,
          lastName: response.profileObj.familyName,
          email: response.profileObj.email,
        },
      },
    }).then(
      () => history.push('/'),
      () => {
        enqueueSnackbar('Authentication failed', { variant: 'error' });
      }
    );
  };

  const failedGoogleAuth = (response) => {
    if (response.error !== 'popup_closed_by_user') {
      enqueueSnackbar('Authentication failed', { variant: 'error' });
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.loginForm}>
        <Typography className={classes.title} variant="h1">
          Sign In
        </Typography>
        <form onSubmit={loginForm.handleSubmit}>
          <div className={classes.inputIndentWrapper}>
            <img alt="" src={emailIcon} style={{ marginRight: '15px' }} />
            <SimpleInput
              placeholder="Email"
              className={classes.inputIndent}
              value={emailField.value}
              onChange={emailField.onChange}
              errors={emailField.errors}
              errorText={emailField.errors[0]}
            />
          </div>
          <div className={classes.inputIndentWrapper}>
            <img alt="" src={passwordIcon} style={{ marginRight: '15px' }} />
            <SimpleInput
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className={classes.inputIndent}
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
              value={passwordField.value}
              onChange={passwordField.onChange}
              errors={passwordField.errors}
              errorText={passwordField.errors[0]}
              autoComplete="new-password"
            />
          </div>
          <Button type="submit" className={classes.button} variant="contained">
            Login
          </Button>
        </form>
        <Typography className={classes.loginWithSubheader}>or</Typography>
        <GoogleLogin
          className={classes.googleButton}
          clientId="171613792112-qcfqh6ct9pnvte3a6tve9gsgasbvjp1a.apps.googleusercontent.com"
          buttonText="Sign In with Google"
          onFailure={failedGoogleAuth}
          onSuccess={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
        <Typography
          onClick={() => history.push('/signUp')}
          className={classes.createNewAccount}
        >
          Don't have an account ? Create new !
        </Typography>
      </div>
    </div>
  );
};

export default SignIn;

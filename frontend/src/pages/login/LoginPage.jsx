import React from "react";

import { useMutation } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";
import {
  Typography,
  Button,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import SimpleInput from "../../components/simple-input/SimpleInput";
import { useField, useForm } from "../../hooks";
import { SIGNIN_MUTATION } from "../../graphql/mutations/auth";
import { isRequired, isEmail, isValidPassword } from "../../utils/validators";

import useStyles from "./styles";
import logo from "../../assets/logo.png";
import AppHeader from "../../components/app-header/AppHeader";
import CardMedia from "@material-ui/core/CardMedia";

const SignIn = () => {
  const classes = useStyles();

  const history = useHistory();

  const [signIn] = useMutation(SIGNIN_MUTATION);

  const loginForm = useForm({
    onSubmit: (formData, formValid) => {
      if (!formValid) return;

      signIn({
        variables: { email: formData.email, password: formData.password },
      }).then(
        () => history.push("/"),
        () => {
          passwordField.setError(
            "Email or password is incorrect, please try again"
          );
          emailField.setError("");
        }
      );
    },
  });

  const [showPassword, setShowPassword] = React.useState(false);
  const onShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const emailField = useField("email", loginForm, {
    defaultValue: "",
    validations: [
      (formData) => isRequired(formData.email, "Email is required"),
      (formData) => isEmail(formData.email, "Invalid email"),
    ],
  });

  const passwordField = useField("password", loginForm, {
    defaultValue: "",
    validations: [
      (formData) => isRequired(formData.password, "Password is required"),
      (formData) =>
        isValidPassword(
          formData.password,
          "The password must include at least 8 characters with 1 symbol, 1 digit, 1 uppercase letter, 1 lowercase letter"
        ),
    ],
  });

  return (
    <div className={classes.root}>
      <AppHeader />
      <div className={classes.loginFormWrapper}>
        <div className={classes.imageWrapper}>
          <CardMedia component="img" alt="Logo" height="350" image={logo} />
        </div>
        <div className={classes.loginForm}>
          <Typography className={classes.title} variant="h1">
            Login
          </Typography>
          <form onSubmit={loginForm.handleSubmit}>
            <SimpleInput
              placeholder="Email"
              className={classes.inputIndent}
              label="Email"
              value={emailField.value}
              onChange={emailField.onChange}
              errors={emailField.errors}
              errorText={emailField.errors[0]}
            />
            <SimpleInput
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              label="Password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={onShowPasswordClick}>
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
            <Button
              type="submit"
              className={classes.button}
              variant="contained"
              color="primary"
            >
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

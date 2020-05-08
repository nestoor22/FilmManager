import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import {
  Button,
  IconButton,
  InputAdornment,
  Typography,
} from "@material-ui/core";

import AppHeader from "../../components/app-header/AppHeader";
import Input from "../../components/simple-input/Input";

import useStyles from "./styles";
import TextInput from "../../components/text-input/TextInput";
import SingleDatePicker from "../../components/date-picker/DatePicker";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  bio: "",
  city: "",
  country: "",
  birthday: null,
};

const RegisterPage = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = React.useState(false);
  const onShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  document.body.style.backgroundColor = "#254052";
  return (
    <div className={classes.root}>
      <AppHeader />
      <div className={classes.registerFormWrapper}>
        <div className={classes.registerForm}>
          <Typography className={classes.title} variant="h1">
            Register
          </Typography>
          <form onSubmit={() => {}}>
            <div className={classes.nameFieldsWrapper}>
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
              type={showPassword ? "text" : "password"}
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
            <Button
              type="submit"
              className={classes.button}
              variant="contained"
              color="primary"
            >
              Create account
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default reduxForm({
  form: "registerForm",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: false,
  touchOnBlur: false,
  initialValues,
})(connect(null)(RegisterPage));

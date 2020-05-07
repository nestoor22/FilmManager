import React from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";

import AppHeader from "../../components/app-header/AppHeader";

import useStyles from "./styles";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  bio: "",
  birthday: "",
};

const RegisterPage = () => {
  const classes = useStyles();

  document.body.style.backgroundColor = "#254052";
  return (
    <div className={classes.root}>
      <AppHeader />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    boardData: state.form.boardForm.values,
  };
};

export default reduxForm({
  form: "boardForm",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: false,
  touchOnBlur: false,
  initialValues,
})(connect(mapStateToProps, null)(RegisterPage));

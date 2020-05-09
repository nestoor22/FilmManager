import React from 'react';

import moment from 'moment';
import { connect } from 'react-redux';
import { useMutation } from '@apollo/react-hooks';

import RegisterForm from './form/RegisterForm';
import { Loader, AppHeader } from 'components';
import { CREATE_USER } from 'graphql/mutations/auth';

import useStyles from './styles';

const RegisterPage = ({ registerForm }) => {
  const classes = useStyles();
  const [savedForms, setSavedForms] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [createUser] = useMutation(CREATE_USER);

  const handleSubmit = () => {
    delete registerForm.confirmPassword;
    setLoading(true);
    registerForm.birthday = moment(registerForm.birthday, 'YYYY-MM-DD');
    console.log(registerForm);
    // createUser({ variables: { user: { ...registerForm } } }).then(() => {});
  };

  document.body.style.backgroundColor = '#254052';

  return (
    <div className={classes.root}>
      <AppHeader />
      <Loader isLoading={loading} />
      <div className={classes.registerFormWrapper}>
        <RegisterForm
          onSubmit={(values) => {
            setSavedForms({
              ...savedForms,
              integrationSettingsForm: { ...values },
            });
            handleSubmit(values);
          }}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    registerForm: state.form.registerForm,
  };
};
export default connect(mapStateToProps)(RegisterPage);

import React from 'react';

import moment from 'moment';
import { useSnackbar } from 'notistack';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';

import RegisterForm from './form/RegisterForm';
import { Loader, AppHeader } from 'components';
import { CREATE_USER } from 'graphql/mutations/auth';

import useStyles from './styles';

const RegisterPage = ({ registerForm }) => {
  const classes = useStyles();

  const history = useHistory();

  const { enqueueSnackbar } = useSnackbar();
  const [savedForms, setSavedForms] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [createUser] = useMutation(CREATE_USER);

  const handleSubmit = (values) => {
    delete values.confirmPassword;
    setLoading(true);
    values.birthday = values.birthday
      ? moment(values.birthday).format('YYYY-MM-DD')
      : null;

    createUser({ variables: { user: { ...values } } }).then(() => {
      setLoading(false);
      enqueueSnackbar('You create account ! Check your email to confirm !', {
        variant: 'success',
      });
      history.push('/');
    });
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

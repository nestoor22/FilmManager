import React from 'react';

import moment from 'moment';
import { useSnackbar } from 'notistack';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';

import Typography from '@material-ui/core/Typography';

import MainInfoForm from './components/main-info-form/MainInfoForm';
import background from 'assets/background.jpg';
import { CREATE_USER } from 'graphql/mutations/auth';

import useStyles from './styles';
import AdditionalInfoForm from './components/additional-info-form/AdditionalInfoForm';

const RegisterPage = () => {
  const classes = useStyles();

  const history = useHistory();

  const { enqueueSnackbar } = useSnackbar();

  const [activeTab, setActiveTab] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  const [createUser] = useMutation(CREATE_USER);

  document.body.style.background = `url(${background})`;
  document.body.style.backgroundSize = `cover`;
  const tabs = [
    {
      tabIndex: 0,
      formName: 'mainInfoForm',
      component: <MainInfoForm onSubmit={() => setActiveTab(activeTab + 1)} />,
    },
    {
      tabIndex: 1,
      formName: 'additionalInfoForm',
      component: (
        <AdditionalInfoForm onSubmit={() => setActiveTab(activeTab + 1)} />
      ),
    },
  ];
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
      <div className={classes.registerFormWrapper}>
        <Typography className={classes.registerFormHeader}>Sign Up</Typography>
        {tabs[activeTab].component}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    mainInfoForm: state.form.mainInfoForm,
  };
};
export default connect(mapStateToProps)(RegisterPage);

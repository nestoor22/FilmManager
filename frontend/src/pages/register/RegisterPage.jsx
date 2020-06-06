import React from 'react';

import moment from 'moment';
import { useSnackbar } from 'notistack';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';

import Typography from '@material-ui/core/Typography';

import MainInfoForm from './components/main-info-form/MainInfoForm';
import AdditionalInfoForm from './components/additional-info-form/AdditionalInfoForm';
import InterestsInfoForm from './components/interests-info-form/InterestsInfoForm';
import background from 'assets/background.jpg';
import { CREATE_USER } from 'graphql/mutations/auth';
import { prepareUserData } from 'utils/prepareUserData';

import useStyles from './styles';

const RegisterPage = ({
  mainInfoForm,
  additionalInfoForm,
  interestsInfoForm,
}) => {
  const classes = useStyles();
  const history = useHistory();

  const { enqueueSnackbar } = useSnackbar();

  const [activeTab, setActiveTab] = React.useState(0);
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
    {
      tabIndex: 2,
      formName: 'interestsInfoForm',
      component: (
        <InterestsInfoForm
          onSubmit={() => {
            const data = prepareUserData(
              mainInfoForm,
              interestsInfoForm,
              additionalInfoForm
            );

            createUser({ variables: { ...data } }).then(() => {
              setLoading(false);
              enqueueSnackbar(
                'You create account ! Check your email to confirm !',
                {
                  variant: 'success',
                }
              );
              history.push('/');
            });
          }}
        />
      ),
    },
    {
      tabIndex: 3,
      component: (
        <div className={classes.finishInfo}>
          We sent you email with confirmation link for your registration. Follow
          this link to activate your account and login. Please, note: this link
          will expire in 24 hours.
        </div>
      ),
    },
  ];

  document.body.style.backgroundColor = '#254052';

  return (
    <div className={classes.root}>
      <div className={classes.registerFormWrapper}>
        <Typography className={classes.registerFormHeader}>
          {activeTab !== 3 ? 'Sign Up' : 'Thank You !'}
        </Typography>
        {tabs[activeTab].component}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    mainInfoForm: state.form.mainInfoForm,
    interestsInfoForm: state.form.interestsInfoForm,
    additionalInfoForm: state.form.additionalInfoForm,
  };
};
export default connect(mapStateToProps)(RegisterPage);

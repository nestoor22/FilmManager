import React from 'react';

import { useHistory } from 'react-router-dom';

import { AppHeader } from 'components';

import useStyles from './styles';

const AccountPage = () => {
  const classes = useStyles();
  const history = useHistory();

  const [loading, setLoading] = React.useState(false);

  document.body.style.backgroundColor = '#254052';

  return (
    <div className={classes.root}>
      <AppHeader />
    </div>
  );
};

export default AccountPage;

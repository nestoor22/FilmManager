import React from 'react';
import { ToastContainer } from 'react-toastify';

import useStyles from './styles';

const NotificationContainer = () => {
  const classes = useStyles();

  return (
    <ToastContainer
      progressClassName={classes.indicator}
      position="top-right"
      autoClose={6000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
};

export default NotificationContainer;

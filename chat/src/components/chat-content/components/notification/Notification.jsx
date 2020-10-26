import React from "react";
import { ToastContainer } from "react-toastify";

import useStyles from "./styles";

const Notification = () => {
  const classes = useStyles();

  return (
    <ToastContainer
      progressClassName={classes.indicator}
      position="top-right"
      autoClose={15000}
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

const NotificationBody = ({ text, sender, char }) => {
  return <div></div>;
};

export { Notification };

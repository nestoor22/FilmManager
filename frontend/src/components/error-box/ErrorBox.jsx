import React from 'react';

import useStyles from './styles';

const ErrorBox = ({ text }) => {
  const classes = useStyles();

  return <div className={classes.root}>{text}</div>;
};

export default ErrorBox;

import React from 'react';
import { useLazyQuery } from '@apollo/react-hooks';

import useStyles from './styles';

const CustomSliderField = () => {
  const classes = useStyles();

  return <div className={classes.pageWrapper}></div>;
};

export default CustomSliderField;

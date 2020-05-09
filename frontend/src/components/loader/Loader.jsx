import React from 'react';
import classNames from 'classnames';

import CircularProgress from '@material-ui/core/CircularProgress';

import { useStyles } from './styles';

const Loader = ({ isLoading, className, loaderClassName }) => {
  const classes = useStyles();

  if (isLoading) {
    return (
      <div className={classNames(classes.loaderWrapper, className)}>
        <CircularProgress disableShrink classes={{ root: loaderClassName }} />
      </div>
    );
  }

  return null;
};

export default Loader;

import React from 'react';

import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';

function AppLogo() {
  const classes = useStyles();
  return (
    <Container className={classes.logo}>
      <Typography variant={'h3'}>ListToWatch</Typography>
    </Container>
  );
}

export default AppLogo;

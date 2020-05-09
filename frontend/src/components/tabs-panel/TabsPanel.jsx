import React from 'react';
import classNames from 'classnames';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  tabs: {
    width: '100%',
    borderRight: `1px solid ${theme.palette.divider}`,
    boxSizing: 'border-box',
  },
  tabPanel: {
    flex: 1,
  },
}));

function TabPanel(props) {
  const classes = useStyles();
  const { children, value, className, index, ...other } = props;

  return (
    <Typography
      component="div"
      className={classNames(classes.tabPanel, className)}
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </Typography>
  );
}

export default TabPanel;

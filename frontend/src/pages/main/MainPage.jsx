import React from 'react';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import List from '@material-ui/core/List';
import Chip from '@material-ui/core/Chip';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import ListSubheader from '@material-ui/core/ListSubheader';

import { AppHeader, TabPanel, ItemsList } from 'components';
import { SHOWS } from 'graphql/queries/shows';

import useStyles from './styles';

function MainPage() {
  const classes = useStyles();

  document.body.style.backgroundImage = 'none';
  document.body.style.backgroundColor = '#BAC7CB';

  return (
    <div className={classes.root}>
      <AppHeader />
      <div className={classes.contentRoot}>
        <div className={classes.sliderWrapper}>
          <Typography>Recommended</Typography>
        </div>
        <div className={classes.tabsRoot}>
          <ItemsList query={SHOWS} showType="film" />
        </div>
      </div>
    </div>
  );
}

export default MainPage;

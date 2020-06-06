import React from 'react';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import List from '@material-ui/core/List';
import Chip from '@material-ui/core/Chip';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';

import { AppHeader, TabPanel, ItemsList } from 'components';
import { SHOWS } from 'graphql/queries/shows';

import useStyles from './styles';

var years = [];

for (let i = 2020; i >= 1920; i--) {
  years.push(i);
}

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 250,
      width: 200,
    },
  },
};

function verticalTabProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

function MainPage() {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);
  const [year, setYear] = React.useState([]);

  document.body.style.backgroundImage = 'none';
  document.body.style.backgroundColor = '#254052';

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppHeader />
      <div className={classes.toolbar}>
        <div className={classes.toolbarSwitchers}>
          <Tabs
            classes={{
              indicator: classes.indicator,
            }}
            value={value}
            onChange={handleChange}
          >
            <Tab
              classes={{
                root: classes.customTabRoot,
                wrapper: classes.customTabWrapper,
                selected: classes.selected,
                textColorInherit: classes.textColorInheritCustom,
              }}
              label="Movies"
              {...verticalTabProps(0)}
            />
            <Tab
              classes={{
                root: classes.customTabRoot,
                wrapper: classes.customTabWrapper,
                selected: classes.selected,
                textColorInherit: classes.textColorInheritCustom,
              }}
              label="All"
              {...verticalTabProps(1)}
            />
            <Tab
              classes={{
                root: classes.customTabRoot,
                wrapper: classes.customTabWrapper,
                selected: classes.selected,
                textColorInherit: classes.textColorInheritCustom,
              }}
              label="Series"
              {...verticalTabProps(2)}
            />
          </Tabs>
        </div>
      </div>
      <div className={classes.contentRoot}>
        <div className={classes.tabsRoot}>
          <TabPanel
            className={classes.tabContentWrapper}
            value={value}
            index={0}
          >
            <ItemsList query={SHOWS} showType="film" />
          </TabPanel>
          <TabPanel
            className={classes.tabContentWrapper}
            value={value}
            index={1}
          >
            <ItemsList query={SHOWS} showType="" />
          </TabPanel>
          <TabPanel
            className={classes.tabContentWrapper}
            value={value}
            index={2}
          >
            <ItemsList query={SHOWS} showType="serie" />
          </TabPanel>
        </div>
      </div>
    </div>
  );
}

export default MainPage;

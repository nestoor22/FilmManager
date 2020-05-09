import React from 'react';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SettingsIcon from '@material-ui/icons/Settings';
import ContactsIcon from '@material-ui/icons/Contacts';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import useStyles from './styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function verticalTabProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const Sidebar = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.sidebar}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        indicatorColor={undefined}
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab
          style={{ minWidth: '80px' }}
          {...verticalTabProps(0)}
          classes={{
            root: classes.customTabRoot,
            wrapper: classes.customTabWrapper,
            selected: classes.selected,
            textColorInherit: classes.textColorInheritCustom,
          }}
          label={
            <div className={classes.iconWrapper}>
              <AccountCircleIcon className={classes.icon} />
              <Typography>Account</Typography>
            </div>
          }
        />
        <Tab
          style={{ minWidth: '80px' }}
          {...verticalTabProps(1)}
          classes={{
            root: classes.customTabRoot,
            wrapper: classes.customTabWrapper,
            selected: classes.selected,
            textColorInherit: classes.textColorInheritCustom,
          }}
          label={
            <div className={classes.iconWrapper}>
              <ContactsIcon className={classes.icon} />
              <Typography>Contacts</Typography>
            </div>
          }
        />
        <Tab
          style={{ minWidth: '80px' }}
          {...verticalTabProps(2)}
          classes={{
            root: classes.customTabRoot,
            wrapper: classes.customTabWrapper,
            selected: classes.selected,
            textColorInherit: classes.textColorInheritCustom,
          }}
          label={
            <div className={classes.iconWrapper}>
              <SettingsIcon className={classes.icon} />
              <Typography>Settings</Typography>
            </div>
          }
        />
      </Tabs>
    </div>
  );
};

export default Sidebar;

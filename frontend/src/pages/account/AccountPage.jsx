import React from 'react';

import { useHistory } from 'react-router-dom';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import ContactsIcon from '@material-ui/icons/Contacts';
import SettingsIcon from '@material-ui/icons/Settings';

import { AppHeader, TabPanel } from 'components';

import useStyles from './styles';

function verticalTabProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const AccountPage = () => {
  const classes = useStyles();
  const history = useHistory();

  const [loading, setLoading] = React.useState(false);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  document.body.style.backgroundColor = '#254052';

  return (
    <div className={classes.root}>
      <AppHeader />
      <div className={classes.content}>
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
        <div className={classes.tabsRoot}>
          <TabPanel
            className={classes.tabContentWrapper}
            value={value}
            index={0}
          >
            Account
          </TabPanel>
          <TabPanel
            className={classes.tabContentWrapper}
            value={value}
            index={1}
          >
            Contacts
          </TabPanel>
          <TabPanel
            className={classes.tabContentWrapper}
            value={value}
            index={2}
          >
            Settings
          </TabPanel>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;

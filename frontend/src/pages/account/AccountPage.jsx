import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import SettingsIcon from '@material-ui/icons/Settings';

import { AppHeader, TabPanel } from 'components';
import AccountTab from './components/account-tab/AccountTab';
import FollowersTab from './components/followers-tab/FollowersTab';
import FollowersIcon from 'assets/icons/followers-icon.svg';
import FollowingIcon from 'assets/icons/following-icon.svg';
import { USER } from 'graphql/queries/user';

import useStyles from './styles';

function verticalTabProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const AccountPage = () => {
  const classes = useStyles();
  const { id } = useParams();

  const { data, refetch, loading } = useQuery(USER, {
    fetchPolicy: 'no-cache',
    notifyOnNetworkStatusChange: true,
    variables: {
      userId: id,
    },
  });

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  document.body.style.background = '#5F8792';

  return (
    <div className={classes.root}>
      <AppHeader />
      {data?.user && (
        <div className={classes.content}>
          {data.user.isLoggedIn && (
            <div className={classes.sidebar}>
              <Tabs
                orientation="vertical"
                variant="scrollable"
                indicatorColor={'primary'}
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
                      <img height="30px" alt="" src={FollowersIcon} />
                      <Typography>{data.user.followers} Followers</Typography>
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
                      <img height="30px" alt="" src={FollowingIcon} />
                      <Typography>{data.user.followed} Followed</Typography>
                    </div>
                  }
                />
                <Tab
                  style={{ minWidth: '80px' }}
                  {...verticalTabProps(3)}
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
          )}
          <div className={classes.tabsRoot}>
            <TabPanel
              className={classes.tabContentWrapper}
              value={value}
              index={0}
            >
              <AccountTab userInfo={data} loading={loading} refetch={refetch} />
            </TabPanel>
            <TabPanel
              className={classes.tabContentWrapper}
              value={value}
              index={1}
            >
              <FollowersTab />
            </TabPanel>
            <TabPanel
              className={classes.tabContentWrapper}
              value={value}
              index={2}
            >
              Contacts
            </TabPanel>
            <TabPanel
              className={classes.tabContentWrapper}
              value={value}
              index={3}
            >
              Settings
            </TabPanel>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountPage;

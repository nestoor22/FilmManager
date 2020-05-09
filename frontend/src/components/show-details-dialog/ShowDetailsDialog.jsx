import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CardMedia from '@material-ui/core/CardMedia';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { TabPanel, CustomChips, GeneralShowInfo } from 'components';

import useStyles from './styles';

function verticalTabProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const ShowDetailsDialog = ({ open, show, onClose }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  if (Object.keys(show).length === 0) {
    return null;
  }

  return (
    <Dialog open={open} classes={{ paper: classes.paper }}>
      <IconButton className={classes.closeBtn} onClick={onClose}>
        <HighlightOffIcon className={classes.closeIcon} />
      </IconButton>
      {show && (
        <div className={classes.dialogContent}>
          <div>
            <CardMedia
              className={classes.dialogPoster}
              component="img"
              alt="Poster"
              height="450"
              width="300"
              image={show.posterUrl}
              title="Poster"
            />
          </div>
          <div className={classes.showDetails}>
            <div className={classes.toolbar}>
              <div className={classes.toolbarSwitchers}>
                <Tabs
                  indicatorColor="primary"
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
                    label="Cast"
                    {...verticalTabProps(0)}
                  />
                  <Tab
                    classes={{
                      root: classes.customTabRoot,
                      wrapper: classes.customTabWrapper,
                      selected: classes.selected,
                      textColorInherit: classes.textColorInheritCustom,
                    }}
                    label="General"
                    {...verticalTabProps(1)}
                  />
                  <Tab
                    classes={{
                      root: classes.customTabRoot,
                      wrapper: classes.customTabWrapper,
                      selected: classes.selected,
                      textColorInherit: classes.textColorInheritCustom,
                    }}
                    label="Watch here"
                    {...verticalTabProps(2)}
                  />
                </Tabs>
              </div>
            </div>
            <div className={classes.tabsRoot}>
              <TabPanel
                className={classes.tabContentWrapper}
                value={value}
                index={0}
              >
                <CustomChips chipsElements={show.actors} />
              </TabPanel>
              <TabPanel
                className={classes.tabContentWrapper}
                value={value}
                index={1}
              >
                <GeneralShowInfo show={show} />
              </TabPanel>
              <TabPanel
                className={classes.tabContentWrapper}
                value={value}
                index={2}
              >
                WHERE TO WATCH
              </TabPanel>
            </div>
          </div>
        </div>
      )}
    </Dialog>
  );
};

export default ShowDetailsDialog;

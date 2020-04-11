import React from "react";
import classNames from "classnames";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import AppHeader from "../../components/app-header/AppHeader";

import ListItem from "@material-ui/core/ListItem";
import TabPanel from "../../components/tabs-panel/TabsPanel";
import List from "@material-ui/core/List";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import Chip from "@material-ui/core/Chip";
import MenuItem from "@material-ui/core/MenuItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import ItemsList from "../../components/items-list/ItemsList";
import { SHOWS } from "../../graphql/queries/shows";

import useStyles from "./styles";

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
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function MainPage() {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);
  const [year, setYear] = React.useState([]);

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
        <List className={classes.filterListRoot}>
          <ListSubheader style={{ lineHeight: "12px" }}>
            Release years
          </ListSubheader>
          <ListItem
            style={{ justifyContent: "center", paddingBottom: "50px" }}
            alignItems="center"
          >
            <Select
              labelId="demo-mutiple-chip-label"
              id="demo-mutiple-chip"
              multiple
              value={year}
              className={classes.select}
              onChange={handleYearChange}
              input={
                <Input className={classes.input} id="select-multiple-chip" />
              }
              MenuProps={MenuProps}
              renderValue={(selected) => (
                <div className={classes.chips}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} className={classes.chip} />
                  ))}
                </div>
              )}
            >
              {years.map((year, index) => (
                <MenuItem key={index} value={year}>
                  {year}
                </MenuItem>
              ))}
            </Select>
          </ListItem>
          <ListSubheader style={{ lineHeight: "12px" }}>Genres</ListSubheader>
          <ListItem
            style={{ justifyContent: "center", paddingBottom: "50px" }}
            alignItems="center"
          >
            <Select
              labelId="demo-mutiple-chip-label"
              id="demo-mutiple-chip"
              multiple
              value={[]}
              className={classes.select}
              onChange={handleYearChange}
              input={
                <Input className={classes.input} id="select-multiple-chip" />
              }
              MenuProps={MenuProps}
              renderValue={(selected) => (
                <div className={classes.chips}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} className={classes.chip} />
                  ))}
                </div>
              )}
            ></Select>
          </ListItem>
          <ListSubheader style={{ lineHeight: "12px" }}>Actors</ListSubheader>
          <ListItem
            style={{ justifyContent: "center", paddingBottom: "0px" }}
            alignItems="center"
          >
            <Select
              labelId="demo-mutiple-chip-label"
              id="demo-mutiple-chip"
              multiple
              value={[]}
              className={classes.select}
              onChange={handleYearChange}
              input={
                <Input className={classes.input} id="select-multiple-chip" />
              }
              MenuProps={MenuProps}
              renderValue={(selected) => (
                <div className={classes.chips}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} className={classes.chip} />
                  ))}
                </div>
              )}
            ></Select>
          </ListItem>
        </List>
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

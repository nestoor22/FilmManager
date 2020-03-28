import React from 'react';
import classNames from 'classnames';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import AppHeader from "../../components/app-header/AppHeader";

import useStyles from './styles'
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import Chip from "@material-ui/core/Chip";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import ListSubheader from "@material-ui/core/ListSubheader";


var years = [];

for (let i=2020; i>=1920; i--){
    years.push(i)
}

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: 250,
            width: 200,
        },
    },
};

function MainPage() {

    const classes = useStyles();
    const [value, setValue] = React.useState(1);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [year, setYear] = React.useState([]);

    const handleYearChange = (event) => {
        setYear(event.target.value);
    };
    return (
        <div className={classes.root}>
        <AppHeader />
            <div className={classes.toolbar}>
                <div className={classes.toolbarSwitchers}>
                    <Tabs
                        classes={{
                        indicator: classes.indicator
                        }}
                        value={value}
                        onChange={handleChange}>
                        <Tab
                            classes={{
                                root: classes.customTabRoot,
                                wrapper: classes.customTabWrapper,
                                selected: classes.selected,
                                textColorInherit: classes.textColorInheritCustom
                            }}
                            label="Movies"
                        />
                        <Tab
                            classes={{
                                root: classes.customTabRoot,
                                wrapper: classes.customTabWrapper,
                                selected: classes.selected,
                                textColorInherit: classes.textColorInheritCustom
                            }}
                            label="All"
                        />
                        <Tab
                            classes={{
                                root: classes.customTabRoot,
                                wrapper: classes.customTabWrapper,
                                selected: classes.selected,
                                textColorInherit: classes.textColorInheritCustom
                            }}
                            label="Series"
                        />
                    </Tabs>
                </div>
            </div>
            <div className={classes.contentRoot}>
                <List className={classes.filterListRoot}>
                    <ListSubheader style={{lineHeight: '12px'}}>Release years</ListSubheader>
                    <ListItem style={{justifyContent: 'center', paddingBottom: '50px'}} alignItems="center">
                        <Select
                            labelId="demo-mutiple-chip-label"
                            id="demo-mutiple-chip"
                            multiple
                            value={year}
                            className={classes.select}
                            onChange={handleYearChange}
                            input={<Input className={classes.input} id="select-multiple-chip" />}
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
                    <ListSubheader style={{lineHeight: '12px'}}>Genres</ListSubheader>
                    <ListItem style={{justifyContent: 'center', paddingBottom: '50px'}} alignItems="center">
                        <Select
                            labelId="demo-mutiple-chip-label"
                            id="demo-mutiple-chip"
                            multiple
                            value={0}
                            className={classes.select}
                            onChange={handleYearChange}
                            input={<Input className={classes.input} id="select-multiple-chip" />}
                            MenuProps={MenuProps}
                            renderValue={(selected) => (
                                <div className={classes.chips}>
                                    {selected.map((value) => (
                                        <Chip key={value} label={value} className={classes.chip} />
                                    ))}
                                </div>
                            )}
                        >
                        </Select>
                    </ListItem>
                    <ListSubheader style={{lineHeight: '12px'}}>Actors</ListSubheader>
                    <ListItem style={{justifyContent: 'center', paddingBottom: '0px'}} alignItems="center">
                        <Select
                            labelId="demo-mutiple-chip-label"
                            id="demo-mutiple-chip"
                            multiple
                            value={0}
                            className={classes.select}
                            onChange={handleYearChange}
                            input={<Input className={classes.input} id="select-multiple-chip" />}
                            MenuProps={MenuProps}
                            renderValue={(selected) => (
                                <div className={classes.chips}>
                                    {selected.map((value) => (
                                        <Chip key={value} label={value} className={classes.chip} />
                                    ))}
                                </div>
                            )}
                        >
                        </Select>
                    </ListItem>
                </List>
            </div>
        </div>
    );
}

export default MainPage;
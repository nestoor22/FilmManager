import React from 'react';
import classNames from 'classnames';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import AppHeader from "../../components/app-header/AppHeader";

import useStyles from './styles'

function MainPage() {
    const classes = useStyles();
    const [value, setValue] = React.useState(2);

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
                            label="All"
                        />
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
                            label="Series"
                        />
                    </Tabs>
                </div>
            </div>
        </div>
    );
}

export default MainPage;
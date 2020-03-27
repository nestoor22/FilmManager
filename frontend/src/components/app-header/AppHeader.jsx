import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import classNames from 'classnames';

import AppBar from '@material-ui/core/AppBar';

import AppLogo from "../app-logo/AppLogo";

import useStyles from './styles'

export default function AppHeader({ className }) {
    const classes = useStyles();
    return (
        <AppBar className={classNames(classes.header, className)} position="static">
            <AppLogo/>
            <nav className={classes.navigation}>
                <ul className={classes.navigationItems}>
                    <MenuLink to="/#" label="Boards" />
                    <MenuLink to="/#" label="Teams" />
                    <MenuLink to="/#" label="Latest" />
                    <MenuLink to="/#" label="Messages" />
                    <MenuLink to="/#" label="Login" />
                </ul>
            </nav>
        </AppBar>
    );
}

function MenuLink({ label, to, activeOnlyWhenExact }) {
    const match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact
    });

    const classes = useStyles();

    return (
        <li className={classes.navigationItem}>
            <Link
                className={classNames(classes.navigationItemLink, {
                    [classes.activeNavigationLink]: match
                })}
                to={to}
            >
                {label}
            </Link>
        </li>
    );
}
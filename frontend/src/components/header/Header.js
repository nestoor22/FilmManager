import React from 'react';
import Logo from "../logo/Logo";
import classNames from 'classnames';
import { useStyles } from './styles';
import AppBar from '@material-ui/core/AppBar';
import { Link, useRouteMatch } from 'react-router-dom';


export default function AppHeader({ className }) {
    const classes = useStyles();
    return (
        <AppBar className={classNames(classes.header, className)} position="static">
            <Logo className={classes.logo} />
            <nav className={classes.navigation}>
                <ul className={classes.navigationItems}>
                    <MenuLink to="/data" label="All" />
                    <MenuLink to="/data/films" label="Films" />
                    <MenuLink to="/data/series" label="Series" />
                    <MenuLink to="/signIn" label="Login" />
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
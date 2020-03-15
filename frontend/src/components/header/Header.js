import React from 'react';
import Logo from "../logo/Logo";
import classNames from 'classnames';
import { useStyles } from './styles';
import AppBar from '@material-ui/core/AppBar';
import { Link, useRouteMatch } from 'react-router-dom';


export default function AppHeader({ className }) {
    const classes = useStyles();
    return (
        <AppBar className={classes.header} position="static">
            <Logo/>
            <nav className={classes.navigation}>
                <ul className={classes.navigationItems}>
                    <MenuLink to="/data" label="All" />
                    <MenuLink to="/data/films" label="Films" />
                    <MenuLink to="/data/series" label="Series" />
                    <MenuLink to="/data" label="Teams" />
                    <MenuLink to="/data" label="Boards" />
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
import React from 'react';

import AppHeader from "../../components/app-header/AppHeader";

import useStyles from './styles'

function LoginPage() {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppHeader/>
            <div className={classes.loginFormWrapper}>
                <div className={classes.loginForm}>
                DSFDSFSDF
                </div>
            </div>
        </div>
    )
}

export default LoginPage;
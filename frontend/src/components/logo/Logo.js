import React from 'react';
import { useStyles } from './styles';
import {NavLink} from "react-router-dom";

function Logo(){
    const classes = useStyles();
    return (
        <NavLink className={classes.appLogo} to="/">
            <h4 className={classes.logoTitle}>FilmsManager</h4>
        </NavLink>
    );
}

export default Logo;
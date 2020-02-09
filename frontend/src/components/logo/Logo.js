import React from 'react';
import './Logo.css'
import {NavLink} from "react-router-dom";

function Logo(){
    return (
        <NavLink className="App-logo" to="/">
            <h4 className="logoTitle">FilmsManager</h4>
        </NavLink>
    );
}

export default Logo;
import React from 'react';
import Logo from "../logo/Logo";
import './Header.css'
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <nav className="navbar navbar-expand-md navbar-light header">
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav">
                    <form className="form-inline ml-auto">
                        <input type="text" className="form-control mr-sm-2" placeholder="Search"></input>
                        <button type="submit" className="btn btn-outline-light">Search</button>
                    </form>
                </div>
                <div className="navbar-nav ml-auto">
                    <NavLink to="/signIn/" className="nav-item nav-link">Login</NavLink>
                </div>
            </div>
            <Logo/>
        </nav>
    );
}

export default Header;
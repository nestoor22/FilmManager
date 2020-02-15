import React from 'react';
import './CabinetSideBar.css'
import {NavLink} from "react-router-dom";

function CabinetSideBar(props) {
    return(
        <nav id="sidebar">
            <ul className="list-unstyled components">
                <p>{props.name}  {props.lastName}</p>
                <li className="active">
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false"
                       className="dropdown-toggle">Account</a>
                    <ul className="collapse list-unstyled" id="homeSubmenu">
                        <li>
                            <NavLink to="/account/boards">Boards</NavLink>
                        </li>
                        <li>
                            <NavLink to="/account/teams">Teams</NavLink>
                        </li>
                        <li>
                            <NavLink to="account/settings">Settings</NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <NavLink to="/data/recommended">Recommended</NavLink>
                </li>
                <li>
                    <a href="#searchSubmenu" data-toggle="collapse" aria-expanded="false"
                       className="dropdown-toggle">Search</a>
                    <ul className="collapse list-unstyled" id="searchSubmenu">
                        <li>
                            <NavLink to="/data/films">Films</NavLink>
                        </li>
                        <li>
                            <NavLink to="/data/series">Series</NavLink>
                        </li>
                        <li>
                            <NavLink to="/data/cartoons">Cartoons</NavLink>
                        </li>
                        <li>
                            <NavLink to="/data">All</NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false"
                       className="dropdown-toggle">About project</a>
                    <ul className="collapse list-unstyled" id="pageSubmenu">
                        <li>
                            <NavLink to="/aboutUs/whoWeAre">Who we are ?</NavLink>
                        </li>
                        <li>
                            <NavLink to="/aboutUs/propose">What we propose ?</NavLink>
                        </li>
                        <li>
                            <NavLink to="aboutUs/howTo">How it works ?</NavLink>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}
export default CabinetSideBar;
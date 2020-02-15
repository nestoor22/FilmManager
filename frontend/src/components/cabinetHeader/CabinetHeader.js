import React from 'react';
import './CabinetHeader.css'
import {NavLink} from "react-router-dom";

function CabinetHeader() {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="nav navbar-nav ml-auto">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/account">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/reviews">Reviews</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/teams">Teams</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/logout">Logout</NavLink>
                    </li>
                </ul>
            </div>
    </nav>
    );
}

export default CabinetHeader;
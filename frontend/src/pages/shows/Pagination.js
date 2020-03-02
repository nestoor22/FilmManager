import {NavLink} from "react-router-dom";
import React from "react";
import './Shows.css'

function Pagination(props) {
    return(
        <nav aria-label="Page navigation example" className="navigation">
            <ul className="pagination justify-content-center">
                <li className="page-item">
                    <NavLink className="page-link" to={`/data/${props.showType}/` +
                    (props.page-1 >=1 ? props.page-1 : "").toString()}>Previous</NavLink>
                </li>
                <li className="page-item">
                    <NavLink className="page-link" to={`/data/${props.showType}/` + (props.page+1).toString()}>Next</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination;
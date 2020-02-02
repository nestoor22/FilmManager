import React from "react";
import './../styles/Filters.css'
import Genres from "../forms/GenresOptions";

function Filters() {
    return (
        <div className="col-sm-3 filters">
            <h6 className="filterTitle">Filters</h6>
            <span className="filtersName">Select genres</span>
            <Genres/>
        </div>
    )
}

export default Filters;
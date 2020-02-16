import React from "react";
import ReleaseDate from "../filters/ReleaseDateOptions";
import Genres from "../filters/GenresOptions";
import './FilterSideBar.css'

function FilterSideBar() {
    return (
        <nav id="FilterSidebar">
            <ul className="list-unstyled components">
                <p>Filters</p>
                <ReleaseDate/>
                <Genres/>
            </ul>
        </nav>
    )
}

export default FilterSideBar;
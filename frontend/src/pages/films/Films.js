import React from "react";
import Header from "../../components/header/Header";
import Logo from "../../components/logo/Logo";
import FilterSideBar from "../../components/filterSideBar/FilterSideBar";
import ShowCard from "../../components/showCard/showCard";
import './Films.css'

function FilmsPage() {
    return(
        <div>
            <Logo/>
            <Header/>
            <div className="row">
                <div className="col-2">
                    <FilterSideBar/>
                </div>
                <div className="col-10">
                    <div className="row">
                    <ShowCard name_eng="Irishnkutvkbhytykubhuyytman" release_date="2019" imdb_rating="9" countries="USA"/>
                    <ShowCard name_eng="Irishman" release_date="2019" imdb_rating="9" countries="USA"/>
                    <ShowCard name_eng="Irishman" release_date="2019" imdb_rating="9" countries="USA"/>
                    <ShowCard name_eng="Irishman" release_date="2019" imdb_rating="9" countries="USA"/>
                    <ShowCard name_eng="Irishman" release_date="2019" imdb_rating="9" countries="USA"/>
                    <ShowCard name_eng="Irishman" release_date="2019" imdb_rating="9" countries="USA"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilmsPage;
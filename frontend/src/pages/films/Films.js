import React from "react";
import Header from "../../components/header/Header";
import Logo from "../../components/logo/Logo";
import FilterSideBar from "../../components/filterSideBar/FilterSideBar";
import ShowCard from "../../components/showCard/showCard";
import { useQuery } from '@apollo/react-hooks';
import SHOWS_QUERY from "../../queries/shows";
import './Films.css'


function FilmsPage() {
    const { loading, error, data } = useQuery(SHOWS_QUERY);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    return(
        <div>
            <Logo/>
            <Header/>
            <div className="row">
                <div className="col-2 filterParent">
                    <FilterSideBar/>
                </div>
                <div className="col-10 filmCardsParent">
                    <div className="row">
                    {data.shows.map(show => (
                        <ShowCard showId={show.showId} nameEng={show.nameEng} releaseDate={show.releaseDate}
                                  imdbRating={show.imdbRating} countries={show.countries} poster={show.posterUrl}>
                        </ShowCard>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilmsPage;
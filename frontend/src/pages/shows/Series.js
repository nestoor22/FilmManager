import React from "react";
import Header from "../../components/header/Header";
import Logo from "../../components/logo/Logo";
import FilterSideBar from "../../components/filterSideBar/FilterSideBar";
import ShowCard from "../../components/showCard/showCard";
import { useQuery } from '@apollo/react-hooks';
import SHOWS_QUERY from "../../queries/shows";
import './Shows.css'
import Pagination from "./Pagination";


function SeriesPage(props) {
    const page = parseInt(props.match.params.pageId) ? parseInt(props.match.params.pageId) : 0;
    const { loading, error, data } = useQuery(SHOWS_QUERY, {variables:{
            "page": page,
            "showType": "serie"
        }});
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
                <div className="col-10 showCardsParent">
                    <div className="row">
                        {data.shows.map(show => (
                            <ShowCard showId={show.showId} title={show.title.length > 40 ? show.title.slice(0, 40)+ '...' : show.title}
                                      releaseDate={show.releaseDate} poster={show.posterUrl}>
                            </ShowCard>
                        ))}
                    </div>
                </div>
            </div>
            <Pagination showType="series" page={page}/>
        </div>
    )
}


export default SeriesPage;
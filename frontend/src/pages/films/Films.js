import React from "react";
import Header from "../../components/header/Header";
import Logo from "../../components/logo/Logo";
import FilterSideBar from "../../components/filterSideBar/FilterSideBar";
import ShowCard from "../../components/showCard/showCard";
import { useQuery } from '@apollo/react-hooks';
import SHOWS_QUERY from "../../queries/shows";
import './Films.css'
import {NavLink} from 'react-router-dom';


function FilmsPage(props) {
    const page = parseInt(props.match.params.pageId) ? parseInt(props.match.params.pageId) : 0;
    const { loading, error, data } = useQuery(SHOWS_QUERY, {variables:{
        "page": page
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
                <div className="col-10 filmCardsParent">
                    <div className="row">
                    {data.shows.map(show => (
                        <ShowCard showId={show.showId} title={show.title.length > 40 ? show.title.slice(0, 40)+ '...' : show.title}
                                  releaseDate={show.releaseDate} poster={show.posterUrl}>
                        </ShowCard>
                    ))}
                    </div>
                </div>
            </div>
            <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className="page-item">
                    <NavLink className="page-link" to={"/data/films/" + (page-1 >=1 ? page-1 : "").toString()}>Previous</NavLink>
                </li>
                <li className="page-item">
                    <NavLink className="page-link" to={"/data/films/" + (page+1).toString()}>Next</NavLink>
                </li>
            </ul>
            </nav>
        </div>
    )
}


export default FilmsPage;
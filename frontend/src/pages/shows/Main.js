import Slider from "react-slick";
import React from "react";
import {useQuery} from "@apollo/react-hooks";
import SHOWS_QUERY from "../../queries/shows";
import Logo from "../../components/logo/Logo";
import Header from "../../components/header/Header";
import ShowCard from "../../components/showCard/showCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Shows.css"
import {Link} from "react-router-dom";

function MainPage(props) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        className: "sliderContainer",
        slidesToShow: 6,
        slidesToScroll: 1,
        accessibility: true,

    };
    const page = parseInt(props.match.params.pageId) ? parseInt(props.match.params.pageId) : 0;
    const { loading: filmsLoading, error: filmsErrors, data: films } = useQuery(SHOWS_QUERY, {variables:{
            "page": page,
            "showType": "film"
        }});
    const { loading: seriesLoading, error: seriesErrors, data: series } = useQuery(SHOWS_QUERY, {variables:{
            "page": page,
            "showType": "serie"
        }});

    if ((filmsLoading)||(seriesLoading)) return 'Loading...';
    if ((filmsErrors) || (seriesErrors)) return `Error!`;
    return(
        <div>
            <Logo/>
            <Header/>
            <div>
                <Link to="/data/films/"><h2 className="slider-header">Movies</h2></Link>
                <Slider {...settings}>
                {films.shows.map(show => (
                    <ShowCard showId={show.showId} title={show.title.length > 40 ? show.title.slice(0, 40)+ '...' : show.title}
                              releaseDate={show.releaseDate} poster={show.posterUrl}>
                    </ShowCard>
                ))}
                </Slider>
                <Link to="/data/series/"><h2 className="slider-header">Series</h2></Link>
                <Slider {...settings}>
                    {series.shows.map(show => (
                        <ShowCard showId={show.showId} title={show.title.length > 40 ? show.title.slice(0, 40)+ '...' : show.title}
                                  releaseDate={show.releaseDate} poster={show.posterUrl}>
                        </ShowCard>
                    ))}
                </Slider>
            </div>
        </div>
    )
}


export default MainPage;
import React from 'react';
import './ShowCard.css'

function ShowCard(props) {
    const countryList = props.countries.map(country => {
        return `${country.name}`
    });

    return(
        <div className="card">
            <img className="card-img-top" width="152" height="220"
                 src={props.poster} alt="Poster"/>
                <div className="card-body">
                    <h6 className="card-title">{props.nameEng}</h6>
                    <p className="card-text">{props.releaseDate}, IMDb: {props.imdbRating}</p>
                    <p className="card-text"><small className="text-muted">{countryList.join(',')}</small></p>
                </div>
        </div>
    )
}

export default ShowCard;
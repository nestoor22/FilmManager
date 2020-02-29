import React from 'react';
import './ShowCard.css'

function ShowCard(props) {
    return(
        <div className="card">
            <img className="card-img-top" width="152" height="220"
                 src={props.poster} alt="Poster"/>
                <div className="card-body">
                    <h6 className="card-title">{props.title}</h6>
                    <p className="card-text">{props.releaseDate}</p>
                </div>
        </div>
    )
}

export default ShowCard;
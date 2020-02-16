import React from 'react';
import './ShowCard.css'

function ShowCard(props) {
    return(
        <div className="card">
            <img className="card-img-top" width="152" height="220"
                 src="http://ex-fs.net/uploads/posts/2019-11/1574937559_24a7492.jpg" alt="Poster"/>
                <div className="card-body">
                    <h6 className="card-title">{props.name_eng}</h6>
                    <p className="card-text">{props.release_date}, IMDb: {props.imdb_rating}</p>
                    <p className="card-text"><small className="text-muted">{props.countries}</small></p>
                </div>
        </div>
    )
}

export default ShowCard;
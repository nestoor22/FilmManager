import React from 'react';
import './PopUp.css'

function PopUp(props) {
    return(
        <div className="cardPopUp">
            <h6 className="card-title">{props.title}</h6>
            <p className="card-text">{props.releaseDate}</p>
        </div>
    )
    }
export default PopUp;
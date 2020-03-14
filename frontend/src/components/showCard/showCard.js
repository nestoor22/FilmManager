import React, {useState} from 'react';
import './ShowCard.css'
import PopUp from "../popUp/PopUp";

function ShowCard(props) {
    const [showPopUp, setPopUpState] = useState(false);
    return(
        <div className="card" onClick={() => setPopUpState(!showPopUp)}>
            <img className="card-img-top" width="152" height="220"
                 src={props.poster} alt="Poster"/>
                <div className="card-body">
                    <h6 className="card-title">{props.title}</h6>
                    <p className="card-text">{showPopUp}</p>
                </div>
        {
            showPopUp ?
                <PopUp/>
                : null
        }
        </div>
    )
}

export default ShowCard;
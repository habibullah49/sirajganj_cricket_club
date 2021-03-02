import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './PlayerInformation.css'
const PlayerInformation = (props) => {
    const { name, jerseyNo, country, price, img, team } = props.player;
    const handleAddPlayer = props.handleAddPlayer;

    return (
        <div className="player-container">
            <div className="player-img">
                <img className="images" src={img} alt="" />

            </div>
            <div className="player-information">
                <p>Name : {name}</p>
                <p>Jersey No : {jerseyNo}</p>
                <p>Country : {country}</p>
                <p>Team : {team}</p>
                <p>Price : ${price} m</p>
                <button className="cart-button" onClick={() => handleAddPlayer(props.player)}><FontAwesomeIcon icon={faUserPlus} /> Add Player</button>
            </div>
        </div>
    );
};

export default PlayerInformation;
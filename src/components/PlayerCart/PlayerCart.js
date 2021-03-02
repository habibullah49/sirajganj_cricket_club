import React from 'react';
import './PlayerCart.css'

const PlayerCart = (props) => {
    const playerCart = props.playerCart;
    let totalPrice = 0;
    for (let i = 0; i < playerCart.length; i++) {
        const player = playerCart[i];
        totalPrice = totalPrice + player.price
    }

    return (
        <div className="cart-container">
            <h2>Total Price: ${totalPrice}m</h2>
            
        </div>
    );
};

export default PlayerCart;
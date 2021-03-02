import './App.css';
import playerData from './PlayerData/playerData.json'
import PlayerInformation from './components/PlayerInformation/PlayerInformation'
import React, { useEffect, useState } from 'react';
import PlayerCart from './components/PlayerCart/PlayerCart';

function App() {
  const [players, setPlayers] = useState([]);
  const [playerCart, setPlayerCart] = useState([]);
  useEffect(() => {
    setPlayers(playerData);
    
  }, []);

  const handleAddPlayer = (player) => {
    const newPlayerCart = [...playerCart, player];
    setPlayerCart(newPlayerCart);
  }

  return (

    <div className="App">

      <h2>Player Added : {playerCart.length}</h2>
      <PlayerCart playerCart={playerCart}></PlayerCart>
      <h2> Number of Players : {players.length}</h2>
      {
        players.map(player => <PlayerInformation player={player} handleAddPlayer={handleAddPlayer}></PlayerInformation>)
      }

    </div>

  );
}

export default App;
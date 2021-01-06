import React, { useState, useEffect } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import GameMenu from './components/GameMenu';
import CreateGame from './components/CreateGame';
import JoinGame from './components/JoinGame';
import TypeRacer from './components/TypeRacer';
import socket from './socketConfig';
import './App.css';

function App() {
  const [gameState, setGameState] = useState({
    _id: '',
    isOpen: false,
    players: [],
    words: [],
  });

  useEffect(() => {
    socket.on('updateGame', (game) => {
      console.log(game);
      setGameState(game);
    });
    return () => {
      socket.removeAllListerners();
    };
  }, []);

  useEffect(() => {
    if (gameState._id !== '') {
      history.push(`/game/${gameState._id}`);
    }
  }, [gameState._id]);

  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={GameMenu} />
        <Route exact path='/game/create' component={CreateGame} />
        <Route exact path='/game/join' component={JoinGame} />
        <Route
          exact
          path='/game/:gameID'
          render={(props) => <TypeRacer {...props} gameState={gameState} />}
        />
      </Switch>
    </Router>
  );
}

export default App;

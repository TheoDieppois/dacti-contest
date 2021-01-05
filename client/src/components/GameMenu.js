import React from 'react';
import { useHistory } from 'react-router-dom';
const GameMenu = () => {
  let history = useHistory();
  return (
    <div>
      <div className='text-center'>
        <h1>Dacti Contest</h1>
        <button
          type='button'
          onClick={() => history.push('/game/create')}
          className='btn btn-primary btn-lg mr-3'
        >
          Créer une partie
        </button>
        <button
          type='button'
          onClick={() => history.push('/game/join')}
          className='btn btn-outline-primary btn-lg mr-3'
        >
          Rejoindre une partie
        </button>
      </div>
    </div>
  );
};

export default GameMenu;

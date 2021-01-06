import React from 'react';
import { useHistory } from 'react-router-dom';

const GameMenu = () => {
  let history = useHistory();
  return (
    <div className='gameMenu section'>
      <div className='text-center'>
        <h1 className='mb-5'>Dacti Contest</h1>
        <button
          type='button'
          onClick={() => history.push('/game/create')}
          className='btn btn-primary btn-lg mx-3'
        >
          Créer une partie
        </button>
        <button
          type='button'
          onClick={() => history.push('/game/join')}
          className='btn btn-outline-primary btn-lg mx-3'
        >
          Rejoindre une partie
        </button>
      </div>
    </div>
  );
};

export default GameMenu;

import React, { useEffect, useState } from 'react';
import socket from '../socketConfig';

const JoinGame = () => {
  const [userInput, setUserInput] = useState({ gameID: '', nickName: '' });

  const onChangeHandler = (e) => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(userInput);
    socket.emit('join-game', userInput);
  };

  return (
    <div className='row'>
      <div className='col-sm'></div>
      <div className='col-sm-8'>
        <h1 className='text-center'>Rejoindre une partie</h1>
        <form onSubmit={onSubmitHandler}>
          <div className='form-group'>
            <label htmlFor='gameID'>Game ID:</label>
            <input
              type='text'
              name='gameID'
              value={userInput.gameID}
              onChange={onChangeHandler}
              placeholder='GameID'
              className='form-control'
            />

            <label htmlFor='nickName'>Pseudo:</label>
            <input
              type='text'
              name='nickName'
              value={userInput.nickName}
              onChange={onChangeHandler}
              placeholder='Votre pseudo'
              className='form-control'
            />
          </div>
          <button type='submit' className='btn btn-primary'>
            Créer
          </button>
        </form>
      </div>
      <div className='col-sm'></div>
    </div>
  );
};

export default JoinGame;

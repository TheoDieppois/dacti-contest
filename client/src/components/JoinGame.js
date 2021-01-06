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
    <div className='row section'>
      <div className='col-sm'></div>
      <div className='col-sm-8'>
        <h1 className='text-center mb-5'>Rejoindre une partie</h1>
        <form
          onSubmit={onSubmitHandler}
          className='d-flex flex-column justify-content-center align-items-center'
        >
          <div className='form-group w-75'>
            <label htmlFor='gameID'>Game ID:</label>
            <input
              type='text'
              name='gameID'
              value={userInput.gameID}
              onChange={onChangeHandler}
              placeholder='GameID'
              className='form-control mb-5'
            />

            <label htmlFor='nickName'>Pseudo:</label>
            <input
              type='text'
              name='nickName'
              value={userInput.nickName}
              onChange={onChangeHandler}
              placeholder='Votre pseudo'
              className='form-control mb-5'
            />
          </div>
          <button type='submit' className='btn btn-primary px-3'>
            Rejoindre
          </button>
        </form>
      </div>
      <div className='col-sm'></div>
    </div>
  );
};

export default JoinGame;

import React, { useEffect, useState } from 'react';
import socket from '../socketConfig';

const CreateGame = () => {
  const [nickName, setNickName] = useState('');

  const onChangeHandler = (e) => {
    setNickName(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    socket.emit('create-game', nickName);
  };

  return (
    <div className='row'>
      <div className='col-sm'></div>
      <div className='col-sm-8'>
        <h1 className='text-center'>Créer une partie</h1>
        <form onSubmit={onSubmitHandler}>
          <div className='form-group'>
            <label htmlFor='nickName'>Pseudo:</label>
            <input
              type='text'
              name='nickName'
              value={nickName}
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

export default CreateGame;

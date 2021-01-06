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
    <div className='row section'>
      <div className='col-sm'></div>
      <div className='col-sm-8'>
        <h1 className='text-center mb-5'>Créer une partie</h1>
        <form
          onSubmit={onSubmitHandler}
          className='d-flex flex-column justify-content-center align-items-center'
        >
          <div className='form-group w-75'>
            <label htmlFor='nickName'>Pseudo:</label>
            <input
              type='text'
              name='nickName'
              value={nickName}
              onChange={onChangeHandler}
              placeholder='Votre pseudo'
              className='form-control mb-4'
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

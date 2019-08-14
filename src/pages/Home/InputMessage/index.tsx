import React, { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

const InputMessage: React.FC = () => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();

    if (message.trim().length === 0) {
      return;
    }

    // dispatch()
    setMessage('');
  };

  return (
    <form onSubmit={handleSendMessage} className='InputMessage'>
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        type='text'
        placeholder='Input your message'
        className='InputMessage__input'
      />

      <button className='InputMessage__button' type='submit'>Send</button>
    </form>
  );
};

export default InputMessage;

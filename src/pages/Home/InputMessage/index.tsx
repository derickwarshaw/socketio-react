import React, { FormEvent, useState } from 'react';
import { useSelector } from 'react-redux';

import StateSocketSergice from 'services/StateSocketSergice';
import { UserMessage, MessageType } from 'models/Message';

const InputMessage: React.FC = () => {
  const [stateSocketService, _] = useState(StateSocketSergice.getInstance());
  // TODO: add types for reducers
  const { user } = useSelector((state: any) => state.userReducer);
  const [message, setMessage] = useState('');

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();

    if (message.trim().length === 0) {
      return;
    }

    const msg = new UserMessage({
      type: MessageType.user,
      body: message,
      user,
    });
    stateSocketService.sendUserMessage(msg);
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

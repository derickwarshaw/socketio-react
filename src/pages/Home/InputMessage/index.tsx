import React, { FormEvent, useState } from 'react';
import { useSelector } from 'react-redux';

import './InputMessage.scss';

import StateSocketSergice from 'services/StateSocketSergice';
import { UserMessage, MessageType } from 'models/Message';
import { IRootState } from 'state/store';

const InputMessage: React.FC = () => {
  const [stateSocketService, _] = useState(StateSocketSergice.getInstance());
  const { user } = useSelector((state: IRootState) => state.userReducer);
  const [message, setMessage] = useState('');

  /**
   * Validate and submit user message.
   * Throw error if data is incorrect.
   * @param {FormEvent} e Form submit event
   */
  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();

    if (message.trim().length === 0) {
      return;
    }

    if (!user) {
      throw Error('[SUBMITING MESSAGE] User is not defined.');
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
        className='InputMessage__input form-input'
      />

      <button className='btn btn--primary InputMessage__submit' type='submit'>Send</button>
    </form>
  );
};

export default InputMessage;

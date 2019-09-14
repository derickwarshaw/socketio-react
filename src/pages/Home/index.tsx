import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import InputMessage from './InputMessage';
import Message from './Message';

import StateSocketSergice from 'services/StateSocketSergice';
import { IRootState } from 'state/store';

const Home: React.FC = () => {
  useEffect(() => {
    const stateSocketService = StateSocketSergice.getInstance();
    stateSocketService.listenChatMessage();
  }, []);

  const { userMSGs } = useSelector((state: IRootState) => state.messageReducer);

  return (
    <section className='Home'>
      <div className='Home__message-list'>
        { userMSGs.map((msg: any, index: number) => (
          <Message key={`UserMessage-${index}`} message={msg} />
        ))}
      </div>

      <InputMessage />
    </section>
  );
};

export default Home;

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import './Home.scss';

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
      <div className='Home__inner'>
        <div className='Home__message-list'>
          <div className='Home__message-inner'>
            { userMSGs.map((msg: any, index: number) => (
              <div key={`UserMessage-${index}`} className='Home__message-wrapper'>
                <Message message={msg} />
              </div>
            ))}
          </div>
        </div>

        <div className='Home__input-message'>
          <InputMessage />
        </div>
      </div>
    </section>
  );
};

export default Home;

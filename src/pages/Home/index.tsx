import React from 'react';
import { useSelector } from 'react-redux';

import InputMessage from './InputMessage';
import Message from './Message';

import StateSocketSergice from 'services/StateSocketSergice';


const Home: React.FC = () => {
  // TODO: Init only when mount component
  const stateSocketService = StateSocketSergice.getInstance();
  stateSocketService.listenChatMessage();

  const { userMSGs } = useSelector((state: any) => state.messageReducer);
  console.log('User Messages: ', userMSGs);

  return (
    <section className='Home'>
      <div className='Home__message-list'>{/* <Message /> */}</div>

      <InputMessage />
    </section>
  );
};

export default Home;

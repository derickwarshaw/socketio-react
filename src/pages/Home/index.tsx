import { User } from 'models/User';
import React from 'react';

import InputMessage from './InputMessage';
import Message from './Message';

import SocketService from 'services/SocketService';


const Home: React.FC = () => {
  const socketService = SocketService.getInstance();

  return (
    <section className='Home'>
      <div className='Home__message-list'>{/* <Message /> */}</div>

      <InputMessage />
    </section>
  );
};

export default Home;

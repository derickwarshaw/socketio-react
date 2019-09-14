import React, { ReactNode } from 'react';
import { UserMessage } from '../../../models/Message';

import './Message.scss';

interface IProps {
  children?: ReactNode;
  message: UserMessage;
}

const Home: React.FC<IProps> = ({ message }) => {
  return (
    <div className='Message'>
      <span className='Message__user'>{message.user.login}:</span>
      <span className='Message__body'>{message.body}</span>
    </div>
  );
};

export default Home;

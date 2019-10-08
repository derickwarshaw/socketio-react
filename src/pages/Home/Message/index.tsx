import React, { ReactNode } from 'react';
import { UserMessage } from '../../../models/Message';

import './Message.scss';

interface IMessageProps {
  children?: ReactNode;
  message: UserMessage;
}

const Message: React.FC<IMessageProps> = ({ message }) => {
  return (
    <div className='Message'>
      {message.user &&
        <span data-test='userName' className='Message__user'>{message.user.login}:</span>
      }
      {!message.user &&
        <span data-test='userName' className='Message__user'>Unknown user:</span>
      }

      <span data-test='body' className='Message__body'>{message.body}</span>
    </div>
  );
};

export default Message;

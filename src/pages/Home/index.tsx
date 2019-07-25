import React from 'react';
import { User } from '../../models/User';
import Message from './Message';

const Home: React.FC = () => {
  return (
    <section className="Home">
      <div className="Home__message-list">{/* <Message /> */}</div>

      <form className="Home__message-input">
        <input type="text" placeholder="Input your message" />
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Home;

import { User } from "models/User";
import React from "react";
import InputMessage from "./InputMessage";
import Message from "./Message";

const Home: React.FC = () => {
  return (
    <section className="Home">
      <div className="Home__message-list">{/* <Message /> */}</div>

      <InputMessage />
    </section>
  );
};

export default Home;

import React, { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";

const InputMessage: React.FC = () => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();

    if (message.trim().length === 0) {
      return;
    }

    // dispatch()
    setMessage("");
  };

  return (
    <form onSubmit={handleSendMessage} className="InputMessage__message-input">
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        type="text"
        placeholder="Input your message"
      />

      <button type="submit">Send</button>
    </form>
  );
};

export default InputMessage;

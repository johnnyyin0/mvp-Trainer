import React, { useState } from "react";
import ChatBox from "./ChatBox";

function ChatButton() {
  const [messages, setMessages] = useState([{bot: "Hey, it's ya boi Chad! How can I assist with your gains today?"}]);
  const [showChatBox, setShowChatBox] = useState(false);

  const handleClick = () => {
    setShowChatBox(!showChatBox);
  };

  return (
    <div className="chat-button">
      <label className="btn btn-circle swap swap-rotate mt-3">
        <input type="checkbox" onClick={handleClick} />

        <svg
          className="swap-off fill-current mt-1 "
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>

        <svg
          className="swap-on fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 512 512"
        >
          <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
        </svg>
      </label>
      {showChatBox && <ChatBox messages={messages} setMessages={setMessages}/>}
    </div>
  );
}

export default ChatButton;

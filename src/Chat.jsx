import React, { useState, useEffect } from "react";

function Chat() {
  const [showChat, setShowChat] = useState(false);

  const handleClick = () => {
    setShowChat(!showChat);
  };

  return (
    <div class="chat-button">
      <label class="btn btn-circle swap swap-rotate mt-5">
        <input type="checkbox" onClick={handleClick} />

        <svg
          class="swap-off fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        //   stroke="black"
        //   stroke-width="2"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>

        <svg
          class="swap-on fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
        </svg>
      </label>
      {showChat && (
        <div className="chat-box">
          {/* Your chat window content goes here */}
        </div>
      )}
    </div>
  );
}

export default Chat;

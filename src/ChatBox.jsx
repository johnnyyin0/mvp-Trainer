import React, { useState } from "react";

function ChatBox() {
  const [messages, setMessages] = useState([]);

  const handleMessageSend = (event) => {
    event.preventDefault();
    const message = event.target.message.value;
    setMessages([...messages, { message }]);
    event.target.reset();
  };

  return (
    <div className="chat-box">
    
      <div className="header-chat bg-neutral">
        <h1 className="text-center text-white font-bold text-xl">Messages</h1>
      </div>

      {messages.map((message, index) => (
        <div key={index} className="chat chat-end mt-5 mr-4">
          <div className="chat-bubble">{message.message}</div>
        </div>
      ))}

      <form
        onSubmit={handleMessageSend}
        className="input-field"
        style={{
          display: "flex",
          alignItems: "center",
          position: "absolute",
          bottom: "0",
          width: "100%",
          padding: "10px",
          backgroundColor: "white",
        }}
      >
        <input
          type="text"
          name="message"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <button className="btn ml-2" type="submit">
          Send
        </button>
      </form>

    </div>
  );
}

export default ChatBox;

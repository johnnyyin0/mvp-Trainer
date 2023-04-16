import React, { useEffect, useState } from "react";
import axios from "axios";

function ChatBox({}) {
  return (
    <div className="chat-box">
      <div className="header-chat bg-neutral">
        <h1 className="text-center text-white font-bold text-xl">Messages</h1>
      </div>

      <div
        className="input-field"
        style={{
          display: "flex",
          alignItems: "center",
          position: "absolute",
          bottom: "0",
          width: "100%",
          padding: "10px"
        }}
      >
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <button className="btn ml-2">Send</button>
      </div>
    </div>
  );
}

export default ChatBox;

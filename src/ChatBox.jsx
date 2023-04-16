import React, { useEffect, useState } from "react";
import axios from "axios";

function ChatBox() {
  return (
    <div className="chat-box">
      <div className="header-chat bg-primary">
        <h1 className="text-center text-black font-bold">Messages</h1>
      </div>

      <div
        className="input-field"
        style={{ position: "absolute", bottom: "0", width: "85%", padding:"10px" }}>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
    </div>
  );
}

export default ChatBox;

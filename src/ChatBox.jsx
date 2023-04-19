import React, { useState, useRef, useEffect } from "react";
import config from '../config'
import { Configuration, OpenAIApi } from "openai"

function ChatBox() {
  const [messages, setMessages] = useState({ user: [], bot: [{ message: "Hey, it's ya boi Chad! How can I assist with your gains today?" }] });
  const chatContainerRef = useRef(null);

  const handleMessageSend = async (event) => {
    event.preventDefault();
    const messageInput = event.target.message;
    const message = messageInput.value.trim();
  
    if (message) {
      setMessages(prevState => ({
        bot: [...prevState.bot],
        user: [...prevState.user, { message }],
      }));
  
      messageInput.value = "";
  
      try {
        const openai = new OpenAIApi(new Configuration({
          apiKey: config.OPENAI_API_KEY
        }));
  
        const response = await openai.createChatCompletion({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: `${message}` }]
        });
  
        setMessages(prevState => ({
          user: [...prevState.user],
          bot: [
            ...prevState.bot,
            { message: response.data.choices[0].message.content }
          ]
        }));
      } catch (error) {
        console.error(error);
        alert("An error occurred while sending the message. Please try again later.");
      }
    }
  };

  useEffect(() => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [messages]);

  return (
    <div className="chat-box" ref={chatContainerRef}>
      <div className="header-chat bg-neutral">
        <h1 className="text-center text-white font-bold text-xl mt-4">Messages</h1>
      </div>
      <div className="message-field">
        {messages.bot.map((message, index) => (
          <div key={index} className="bot-messages chat chat-start mt-5 ml-5 mb-5">
            <div className="chat-bubble">{message.message}</div>
          </div>
        ))}
        {messages.user.map((message, index) => (
          <div key={index} className="user-messages chat chat-end mt-5 mr-5 mb-5">
            <div className="chat-bubble">{message.message}</div>
          </div>
        ))}
      </div>
      <form onSubmit={handleMessageSend} className="input-field">
        <input
          type="text"
          name="message"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <button className="btn ml-3" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatBox;

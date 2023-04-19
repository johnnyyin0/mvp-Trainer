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
      setMessages({ ...messages, user: [...messages.user, { message }] });
      messageInput.value = "";

      try {
        const openai = new OpenAIApi(new Configuration({
          apiKey: config.OPENAI_API_KEY,
          headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
          },
        }))

        const response = await openai.createChatCompletion({
          model: "text-davinci-002",
          prompt: `The following is a conversation with an AI assistant. The assistant helps with fitness related queries.
          Human: ${message}
          AI:`,
          max_tokens: 100,
          temperature: 0.7,
          n: 1,
          stop: "\n",
        })

        setMessages({ ...messages, bot: [...messages.bot, { message: response.data.choices[0].text }] });
      } catch (error) {
        console.error(error)
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

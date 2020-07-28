import React, { useEffect, useState } from "react";
import * as signalr from "@microsoft/signalr";
import useLocalStorage from "../hooks/useLocalStorage";

const Chat = () => {
  const [token, setToken] = useLocalStorage("token", "");
  const [user, setUser] = useLocalStorage("username", "");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const connection = new signalr.HubConnectionBuilder()
    .withUrl("https://localhost:44387/chat", {
      accessTokenFactory: () => token,
    })
    .configureLogging(signalr.LogLevel.Information)
    .build();

  const connect = async () => {
    try {
      await connection.start();
      console.log("Connected to Hub");
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const sendMessage = (message) => {
    connection.invoke("SendMessage", { user, message });
    setMessage("");
  };

  useEffect(() => {
    connect().catch((err) => console.log(err));
  });

  useEffect(() => {
    connection.on("message", (msg) => {
      console.log(msg);
      setMessages((prevMessages) => [...prevMessages, msg]);
    });
  }, []);

  return (
    <>
      <header className='bg-purple-900 h-16'>
        <div className='container mx-auto h-full flex justify-between'>
          <div className='flex items-center'>
            <h1 className='text-white font-bold text-xl'>Chat App</h1>
          </div>
          <div className='flex items-center'>
            <button className='bg-white h-12 w-12 rounded-full text-purple-900'>Salir</button>
          </div>
        </div>
      </header>

      <div className='container mx-auto mt-5'>
        <div className='flex'>
          <textarea
            className='border border-purple-900 w-3/4 p-2 mr-2 rounded-lg'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            className='w-1/4 bg-purple-900 rounded-lg text-white font-bold'
            onClick={(e) => sendMessage(message)}
          >
            Send
          </button>
        </div>
        <ul>
          {messages.map((msg, index) => (
            <li
              key={index}
              className={`border mt-2 p-2 rounded-lg ${
                msg.user === user
                  ? "box__animation__left"
                  : "box__animation__rigth"
              } ${
                msg.user !== user
                  ? "bg-purple-900 border-purple-900"
                  : "bg-pink-900 border-pink-900"
              }`}
            >
              <div className='block text-white'>
                <span className='font-bold'>{msg.user} dijo</span> {msg.message}
              </div>
              <div className='block italic text-sm text-white'>
                {new Date(msg.date).toLocaleDateString()} -{" "}
                {new Date(msg.date).toLocaleTimeString()}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Chat;

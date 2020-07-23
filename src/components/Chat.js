import React, { useEffect, useState } from "react";
import * as signalr from "@microsoft/signalr";
import useLocalStorage from "../hooks/useLocalStorage";

const Chat = () => {
  const [token, setToken] = useLocalStorage("token", "");
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
    connection.invoke("SendMessage", message);
    setMessage('');
  };

  useEffect(() => {
    connect();
  });

  useEffect(() => {
      connection.on("message", (msg) => {
        setMessages([...messages, msg])
      });
  },[messages]);

  return (
    <>
      <h1>Chat</h1>
      <input onChange={(e) => setMessage(e.target.value)} />
      <button onClick={(e) => sendMessage(message)}>Send</button>
      <ul>
        {messages.map((msg) => (
          <li>{msg}</li>
        ))}
      </ul>
    </>
  );
};

export default Chat;

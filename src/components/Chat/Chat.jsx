import React from "react";
import "./Chat.css";
import Nav from "./Nav";
import Input from "./Input";
import ChatArea from "./ChatArea";

export default function Chat() {
  return (
    <div className="chat">
      <Nav />
      <ChatArea />
      <Input />
    </div>
  );
}

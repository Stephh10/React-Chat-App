import React, { useContext, useEffect, useState } from "react";
import "./Chat.css";
import Message from "./Message";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { ChatContext } from "../../store/ChatContext";

export default function ChatArea() {
  const { chatDetails } = useContext(ChatContext);
  const [allMessages, setAllMessages] = useState([]);

  useEffect(() => {
    function getChatData() {
      const unsub = onSnapshot(doc(db, "chats", chatDetails.chatId), (doc) => {
        setAllMessages(doc.data()?.messages);
      });
      return () => unsub();
    }
    chatDetails.chatId && getChatData();
  }, [chatDetails.chatId]);

  if (chatDetails.chatId == null) {
    return (
      <div className="noChat">
        <p>Please select user</p>
      </div>
    );
  }

  return (
    <div className="chatArea">
      {allMessages?.map((message) => (
        <Message key={message.id} messageDetails={message} />
      ))}
    </div>
  );
}

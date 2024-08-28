import React, { useContext, useState } from "react";
import "./Chat.css";
import { Paperclip, Smiley, PaperPlaneRight } from "phosphor-react";
import { ChatContext } from "../../store/ChatContext";
import { UserContext } from "../../store/UserContext";
import { doc, Timestamp, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../../firebase";
import { v4 as uuidv4 } from "uuid";

export default function Input() {
  const { currentUser } = useContext(UserContext);
  const { chatDetails } = useContext(ChatContext);
  const [newMessage, setNewMessage] = useState("");

  function inputValue(e) {
    setNewMessage(e.target.value);
  }

  async function sendNewMessage() {
    await updateDoc(doc(db, "chats", chatDetails.chatId), {
      messages: arrayUnion({
        senderId: currentUser.id,
        text: newMessage,
        id: uuidv4(),
        date: Timestamp.now(),
      }),
    });
  }

  return (
    <div className="input">
      <input
        onChange={inputValue}
        type="text"
        placeholder="Enter your message here"
      />
      <div className="inputActions">
        <button>
          <Paperclip size={25} />
        </button>
        <button>
          <Smiley size={25} />
        </button>
        <button onClick={sendNewMessage}>
          <PaperPlaneRight size={28} color="#433259" weight="fill" />
        </button>
      </div>
    </div>
  );
}

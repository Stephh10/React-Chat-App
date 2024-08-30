import React, { useContext, useRef, useState } from "react";
import "./Chat.css";
import { Paperclip, Smiley, PaperPlaneRight } from "phosphor-react";
import { ChatContext } from "../../store/ChatContext";
import { UserContext } from "../../store/UserContext";
import { doc, Timestamp, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../../firebase";
import { v4 as uuidv4 } from "uuid";
import EmojiPicker from "emoji-picker-react";

export default function Input() {
  const { currentUser } = useContext(UserContext);
  const { chatDetails } = useContext(ChatContext);
  const [newMessage, setNewMessage] = useState("");
  const [openEmoji, setOpenEmoji] = useState(false);
  const inputRef = useRef(null);

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

    await updateDoc(doc(db, "userschat", currentUser.id), {
      [chatDetails.chatId + ".lastMessage"]: {
        message: newMessage,
        id: currentUser.id,
        date: Timestamp.now(),
      },
    });

    await updateDoc(doc(db, "userschat", chatDetails.user.id), {
      [chatDetails.chatId + ".lastMessage"]: {
        message: newMessage,
        id: currentUser.id,
        date: Timestamp.now(),
      },
    });

    setNewMessage("");
    inputRef.current.focus();
  }

  function handleEmojiSelect(e) {
    setNewMessage((prev) => prev + e.emoji);
  }

  console.log(newMessage);

  if (chatDetails.chatId == null) {
    return null;
  }

  return (
    <div className="input">
      <input
        onChange={inputValue}
        ref={inputRef}
        value={newMessage}
        type="text"
        placeholder="Enter your message here"
      />
      <div className="inputActions">
        <button>
          <Paperclip size={25} />
        </button>
        <button>
          <Smiley onClick={() => setOpenEmoji((prev) => !prev)} size={25} />
        </button>
        <button onClick={sendNewMessage}>
          <PaperPlaneRight size={28} color="#433259" weight="fill" />
        </button>
      </div>
      <div className="emojiContainer">
        <EmojiPicker
          onEmojiClick={(e) => handleEmojiSelect(e)}
          width={250}
          height={340}
          open={openEmoji}
          searchDisabled={true}
          className="emojiContainer"
        />
      </div>
    </div>
  );
}

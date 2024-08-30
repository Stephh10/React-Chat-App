import React, { useEffect, useState, useRef } from "react";
import "./Chat.css";
import { useContext } from "react";
import { UserContext } from "../../store/UserContext";
import { formatDateFunc } from "../../helpers/formatDate";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

export default function Message({ messageDetails }) {
  const [user, setUser] = useState(null);
  const { currentUser } = useContext(UserContext);
  const messageRef = useRef();
  const currentUserMessage = messageDetails.senderId === currentUser.id;
  const seconds = messageDetails.date.seconds;
  const nanoseconds = messageDetails.date.nanoseconds;

  const { formatedDate } = formatDateFunc(seconds, nanoseconds);

  useEffect(() => {
    async function getMessageUser() {
      const unsub = onSnapshot(
        doc(db, "users", messageDetails.senderId),
        (doc) => {
          setUser(doc.data());
        }
      );

      return () => unsub();
    }

    messageDetails.senderId && getMessageUser();
  }, [messageDetails.senderId]);

  useEffect(() => {
    if (messageRef.current) {
      messageRef?.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messageDetails?.date?.seconds]);

  return (
    <div
      ref={messageRef}
      className={currentUserMessage ? "message owner" : "message"}
    >
      <div className="messageUser">
        <img src={user?.userImg} alt="chatImg" />
        <p>{formatedDate}</p>
      </div>
      <div
        className={
          currentUserMessage ? "messageDetails owner" : "messageDetails"
        }
      >
        <div className="imgArea">
          {messageDetails.imgData && (
            <img src={messageDetails.imgData} alt="chatImg" />
          )}
          {/* <img src={userImg} alt="sendingImg" /> */}
        </div>
        {messageDetails.text && (
          <p className="messageContent">{messageDetails.text}</p>
        )}
      </div>
    </div>
  );
}

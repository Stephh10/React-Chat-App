import React, { useEffect, useState } from "react";
import userImg from "../../assets/profileImg.jpg";
import "./Chat.css";
import { useContext } from "react";
import { UserContext } from "../../store/UserContext";
import { formatDateFunc } from "../../helpers/formatDate";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

export default function Message({ messageDetails }) {
  const [user, setUser] = useState(null);
  const { currentUser } = useContext(UserContext);
  const currentUserMessage = messageDetails.senderId === currentUser.id;
  const seconds = messageDetails.date.seconds;
  const nanoseconds = messageDetails.date.nanoseconds;

  const { formatedDate } = formatDateFunc(seconds, nanoseconds);

  console.log(messageDetails.senderId);

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

  return (
    <div className={currentUserMessage ? "message owner" : "message"}>
      <div className="messageUser">
        <img src={user?.userImg} alt="chatImg" />
        <p>{formatedDate}</p>
      </div>
      <div className="messageDetails">
        <div className="imgArea"></div>
        <p className="messageContent">{messageDetails.text}</p>
      </div>
    </div>
  );
}

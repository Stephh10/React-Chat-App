import React from "react";
import userImg from "../../assets/profileImg.jpg";
import "./Chat.css";
import { useContext } from "react";
import { UserContext } from "../../store/UserContext";
import { formatDateFunc } from "../../helpers/formatDate";

export default function Message({ messageDetails }) {
  const { currentUser } = useContext(UserContext);
  const currentUserMessage = messageDetails.senderId === currentUser.id;
  const seconds = messageDetails.date.seconds;
  const nanoseconds = messageDetails.date.nanoseconds;

  const { formatedDate } = formatDateFunc(seconds, nanoseconds);

  console.log(messageDetails.date);

  return (
    <div className={currentUserMessage ? "message owner" : "message"}>
      <div className="messageUser">
        <img src={userImg} alt="chatImg" />
        <p>{formatedDate}</p>
      </div>
      <div className="messageDetails">
        <div className="imgArea"></div>
        <p className="messageContent">{messageDetails.text}</p>
      </div>
    </div>
  );
}

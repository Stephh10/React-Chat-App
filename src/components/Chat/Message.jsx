import React from "react";
import userImg from "../../assets/profileImg.jpg";
import "./Chat.css";

export default function Message() {
  return (
    <div className="message owner">
      <div className="messageUser">
        <img src={userImg} alt="chatImg" />
        <p>Today</p>
      </div>
      <div className="messageDetails">
        <div className="imgArea"></div>
        <p className="messageContent">Here is my text</p>
      </div>
    </div>
  );
}

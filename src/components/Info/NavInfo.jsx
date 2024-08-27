import React from "react";
import infoImg from "../../assets/profileImg.jpg";
import { XCircle } from "phosphor-react";
import { useContext } from "react";
import { ChatContext } from "../../store/ChatContext";
import { UserContext } from "../../store/UserContext";

export default function NavInfo() {
  const { currentUser } = useContext(UserContext);
  const { chatDetails } = useContext(ChatContext);
  return (
    <div className="navInfo">
      <button className="infoClose">
        <XCircle size={30} />
      </button>
      <img src={infoImg} alt="infoImg" />
      <div className="navDetails">
        <h3>{chatDetails?.user?.username || currentUser?.username}</h3>
        <p>UX/UI Designer</p>
      </div>
    </div>
  );
}

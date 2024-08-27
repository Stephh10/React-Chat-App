import React, { useContext } from "react";
import "./Chat.css";
import navImg from "../../assets/profileImg.jpg";
import { Phone, VideoCamera, DotsThree } from "phosphor-react";
import { UserContext } from "../../store/UserContext";
import { ChatContext } from "../../store/ChatContext";

export default function Nav() {
  const { currentUser } = useContext(UserContext);
  const { chatDetails } = useContext(ChatContext);

  console.log(chatDetails.user);

  return (
    <div className="nav">
      <div className="navImg">
        <img src={navImg} alt="userImg" />

        <div className="userDetailsNav">
          <h3>{chatDetails?.user?.username || "Select user"}</h3>
          {chatDetails.user !== null ? <p>Active</p> : null}
        </div>
      </div>
      <div className="navActions">
        <button>
          <Phone size={25} />
        </button>
        <button>
          <VideoCamera size={25} />
        </button>
        <button>
          <DotsThree size={28} weight="bold" />
        </button>
      </div>
    </div>
  );
}

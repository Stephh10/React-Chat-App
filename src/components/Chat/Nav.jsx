import React, { useContext } from "react";
import "./Chat.css";
import navImg from "../../assets/profileImg.jpg";
import { Phone, VideoCamera, DotsThree } from "phosphor-react";
import { UserContext } from "../../store/UserContext";
import { ChatContext } from "../../store/ChatContext";

export default function Nav() {
  const { chatDetails } = useContext(ChatContext);
  const { handleInfoComponent, currentUser } = useContext(UserContext);

  console.log(chatDetails?.user);

  return (
    <div className="nav">
      <div className="navImg">
        <img
          src={
            chatDetails.chatId !== null
              ? chatDetails.user.userImg
              : currentUser?.userImg
          }
          alt="userImg"
        />

        <div className="userDetailsNav">
          <h3>{chatDetails?.user?.username || currentUser.username}</h3>
          {chatDetails.user !== null ? <p>Active</p> : null}
        </div>
      </div>
      <div className="navActions">
        {chatDetails.user && (
          <>
            <button>
              <Phone size={25} />
            </button>
            <button>
              <VideoCamera size={25} />
            </button>
          </>
        )}

        <button onClick={() => handleInfoComponent(true)}>
          <DotsThree size={28} weight="bold" />
        </button>
      </div>
    </div>
  );
}

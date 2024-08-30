import React, { useContext } from "react";
import "./Chat.css";
import { Phone, VideoCamera, DotsThree } from "phosphor-react";
import { UserContext } from "../../store/UserContext";
import { ChatContext } from "../../store/ChatContext";
import { toast } from "react-toastify";

export default function Nav() {
  const { chatDetails } = useContext(ChatContext);
  const { handleInfoComponent, currentUser } = useContext(UserContext);

  function handleComingSoon() {
    toast.info("Comming soon");
  }

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
            <button onClick={handleComingSoon}>
              <Phone size={25} />
            </button>
            <button onClick={handleComingSoon}>
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

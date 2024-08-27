import React, { useContext } from "react";
import img1 from "../../assets/profileImg.jpg";
import "./Sidebar.css";
import { ChatContext } from "../../store/ChatContext";
import { UserContext } from "../../store/UserContext";

export default function SidebarUser({ foundUser, user, handleAddUser }) {
  const { selectChat } = useContext(ChatContext);
  const { currentUser } = useContext(UserContext);
  const handleClick = () => {
    if (foundUser) {
      handleAddUser(user);
    }

    selectChat(currentUser, user);
  };

  return (
    <div
      onClick={handleClick}
      className={foundUser ? "sidebarUser foundUser" : "sidebarUser"}
    >
      <img src={img1} alt="sdd" />
      <div className="sidebarUserInfo">
        <h4>{user.username}</h4>
        {!foundUser && <p>Message here</p>}
      </div>
    </div>
  );
}

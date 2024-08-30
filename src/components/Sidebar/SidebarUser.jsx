import React, { useContext } from "react";
import img1 from "../../assets/profileImg.jpg";
import "./Sidebar.css";
import { ChatContext } from "../../store/ChatContext";
import { UserContext } from "../../store/UserContext";

export default function SidebarUser({
  foundUser,
  user,
  handleAddUser,
  messageDetails,
}) {
  const { selectChat } = useContext(ChatContext);
  const { currentUser } = useContext(UserContext);
  const handleClick = () => {
    if (foundUser) {
      handleAddUser(user);
      selectChat(currentUser, user);
    }

    selectChat(currentUser, user);
  };

  const myMessageSidebar = messageDetails?.id == currentUser.id;

  const msgArea = (
    <div className="showDetailsSidebar">
      {myMessageSidebar && <span>You:</span>}
      <p>{messageDetails?.message}</p>
    </div>
  );

  return (
    <div
      onClick={handleClick}
      className={foundUser ? "sidebarUser foundUser" : "sidebarUser"}
    >
      <img src={foundUser ? user.userImg : user.userImg} alt="sdd" />
      <div className="sidebarUserInfo">
        <h4>{user.username}</h4>
        {!foundUser && msgArea}
      </div>
    </div>
  );
}

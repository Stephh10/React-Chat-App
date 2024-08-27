import React from "react";
import img1 from "../../assets/profileImg.jpg";
import "./Sidebar.css";

export default function SidebarUser({ foundUser, user, handleAddUser }) {
  const handleClick = () => {
    if (foundUser) {
      console.log(user);
      //   handleAddUser(user.id);
    }
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

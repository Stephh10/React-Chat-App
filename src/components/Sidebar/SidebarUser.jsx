import React from "react";
import img1 from "../../assets/profileImg.jpg";
import "./Sidebar.css";

export default function SidebarUser() {
  return (
    <div className="sidebarUser">
      <img src={img1} alt="sdd" />
      <div className="sidebarUserInfo">
        <h4>Kevin Punter</h4>
        <p>Message here</p>
      </div>
    </div>
  );
}

import React from "react";
import "./Chat.css";
import navImg from "../../assets/profileImg.jpg";
import { UserCirclePlus, Phone, VideoCamera } from "phosphor-react";

export default function Nav() {
  return (
    <div className="nav">
      <div className="navImg">
        <img src={navImg} alt="userImg" />

        <div className="userDetailsNav">
          <h3>Username here</h3>
          <p>Active</p>
        </div>
      </div>
      <div className="navActions">
        <UserCirclePlus size={25} />
        <Phone size={25} />
        <VideoCamera size={25} />
      </div>
    </div>
  );
}

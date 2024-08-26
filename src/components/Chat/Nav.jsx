import React from "react";
import "./Chat.css";
import navImg from "../../assets/profileImg.jpg";
import { Phone, VideoCamera, DotsThree } from "phosphor-react";

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

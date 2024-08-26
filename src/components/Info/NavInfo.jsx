import React from "react";
import infoImg from "../../assets/profileImg.jpg";
import { XCircle } from "phosphor-react";

export default function NavInfo() {
  return (
    <div className="navInfo">
      <button className="infoClose">
        <XCircle size={30} />
      </button>
      <img src={infoImg} alt="infoImg" />
      <div className="navDetails">
        <h3>Kevin Punter</h3>
        <p>UX/UI Designer</p>
      </div>
    </div>
  );
}

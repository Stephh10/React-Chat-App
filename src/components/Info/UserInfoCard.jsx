import React from "react";
// import { DeviceMobile } from "phosphor-react";

export default function UserInfoCard({ name, content, icon }) {
  return (
    <div className="userInfoCard">
      <div className="infoCardContent">
        <h5>{name}</h5>
        <p>{content}</p>
      </div>
      {icon}
    </div>
  );
}

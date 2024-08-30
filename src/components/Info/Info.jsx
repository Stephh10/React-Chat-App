import React, { useContext } from "react";
import "./Info.css";
import NavInfo from "./NavInfo";
import UserInfoCard from "./UserInfoCard";
import {
  DeviceMobile,
  Envelope,
  CalendarBlank,
  GenderIntersex,
} from "phosphor-react";
import { UserContext } from "../../store/UserContext";
import { ChatContext } from "../../store/ChatContext";

export default function Info() {
  const { currentUser } = useContext(UserContext);
  const { chatDetails } = useContext(ChatContext);

  const activeUser = chatDetails.user ? chatDetails.user : currentUser;

  return (
    <div className="info">
      <NavInfo />
      <UserInfoCard
        name="Mobile"
        content={activeUser.number}
        icon={<DeviceMobile size={30} />}
      />
      <UserInfoCard
        name="Email"
        content={activeUser.email}
        icon={<Envelope size={30} />}
      />
      <UserInfoCard
        name="Date of Birth"
        content={activeUser.dateofbirth}
        icon={<CalendarBlank size={30} />}
      />
      <UserInfoCard
        name="Gender"
        content={activeUser.gender}
        icon={<GenderIntersex size={30} />}
      />
    </div>
  );
}

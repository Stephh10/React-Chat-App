import React from "react";
import "./Info.css";
import NavInfo from "./NavInfo";
import UserInfoCard from "./UserInfoCard";
import {
  DeviceMobile,
  Envelope,
  CalendarBlank,
  GenderIntersex,
} from "phosphor-react";

export default function Info() {
  return (
    <div className="info">
      <NavInfo />
      <UserInfoCard
        name="Mobile"
        content={123123213}
        icon={<DeviceMobile size={30} />}
      />
      <UserInfoCard
        name="Email"
        content={"stepg@gmail.com"}
        icon={<Envelope size={30} />}
      />
      <UserInfoCard
        name="Date of Birth"
        content={"11/02/2000"}
        icon={<CalendarBlank size={30} />}
      />
      <UserInfoCard
        name="Gender"
        content={"Male"}
        icon={<GenderIntersex size={30} />}
      />
    </div>
  );
}

import React, { useContext } from "react";
import "./Main.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Chat from "../../components/Chat/Chat";
import Info from "../../components/Info/Info";
import { UserContext } from "../../store/UserContext";

export default function Main() {
  const { showInfo } = useContext(UserContext);
  return (
    <div className="main">
      <Sidebar />
      <Chat />
      {showInfo && <Info />}
    </div>
  );
}

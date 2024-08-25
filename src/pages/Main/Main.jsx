import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Chat from "../../components/Chat/Chat";
import Info from "../../components/Info/Info";

import "./Main.css";

export default function Main() {
  return (
    <div className="main">
      <Sidebar />
      <Chat />
      <Info />
    </div>
  );
}

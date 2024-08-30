import React, { useContext, useEffect } from "react";
import "./Main.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Chat from "../../components/Chat/Chat";
import Info from "../../components/Info/Info";
import { UserContext } from "../../store/UserContext";
import { toast } from "react-toastify";

export default function Main({ errorMessage }) {
  const { showInfo } = useContext(UserContext);

  useEffect(() => {
    if (errorMessage) {
      toast.info("Page not found 404");
    }
  }, []);
  return (
    <div className="main">
      <Sidebar />
      <Chat />
      {showInfo && <Info />}
    </div>
  );
}

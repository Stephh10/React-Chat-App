import React from "react";
import "./Sidebar.css";
import SidebarNav from "./SidebarNav";
import Search from "./Search";
import SidebarUser from "./SidebarUser";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  function handleLogout() {
    console.log("clicked");
    auth
      .signOut()
      .then(() => {
        console.log("all good");
        navigate("/login");
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="sidebar">
      <SidebarNav />
      <Search />
      <div className="sidebarActions">
        <SidebarUser />
        <SidebarUser />
      </div>
      <button onClick={handleLogout} className="logoutBtn">
        Logout
      </button>
    </div>
  );
}

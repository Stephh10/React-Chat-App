import React from "react";
import "./Sidebar.css";
import SidebarNav from "./SidebarNav";
import Search from "./Search";
import SidebarUser from "./SidebarUser";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarNav />
      <Search />
      <div className="sidebarActions">
        <SidebarUser />
        <SidebarUser />
      </div>
      <button className="logoutBtn">Logout</button>
    </div>
  );
}

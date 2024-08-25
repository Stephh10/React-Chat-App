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
      <SidebarUser />
      <SidebarUser />
    </div>
  );
}

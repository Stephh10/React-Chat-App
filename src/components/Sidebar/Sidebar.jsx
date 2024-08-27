import React, { useState } from "react";
import "./Sidebar.css";
import SidebarNav from "./SidebarNav";
import Search from "./Search";
import SidebarUser from "./SidebarUser";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Sidebar() {
  const [user, setUser] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  function handleLogout() {
    auth
      .signOut()
      .then(() => {
        navigate("/login");
        toast.success("Successfully logged out");
      })
      .catch((err) => {
        toast.error(err);
      });
  }

  function handleAddUser(uid) {
    setUser(null);
    setInputValue("");
    console.log("searching");
    console.log(uid);
  }

  return (
    <div className="sidebar">
      <SidebarNav />
      <Search
        setUser={setUser}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      {user && (
        <SidebarUser
          foundUser={true}
          user={user}
          handleAddUser={handleAddUser}
        />
      )}
      <div className="sidebarActions">
        {/* <SidebarUser />
        <SidebarUser /> */}
      </div>
      <button onClick={handleLogout} className="logoutBtn">
        Logout
      </button>
    </div>
  );
}

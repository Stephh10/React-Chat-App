import React, { useContext, useEffect, useState } from "react";
import "./Sidebar.css";
import SidebarNav from "./SidebarNav";
import Search from "./Search";
import SidebarUser from "./SidebarUser";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../store/UserContext";
import {
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
  updateDoc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase";

export default function Sidebar() {
  const [user, setUser] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [userChats, setUserChats] = useState([]);
  const { currentUser } = useContext(UserContext);
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

  useEffect(() => {
    function fetchUserChats() {
      const unsub = onSnapshot(doc(db, "userschat", currentUser.id), (doc) => {
        setUserChats(doc.data());
      });

      return () => unsub();
    }

    currentUser.id && fetchUserChats();
  }, [currentUser.id]);

  async function handleAddUser(selectedUser) {
    setUser(null);
    setInputValue("");

    const combinedId =
      currentUser.id > selectedUser.id
        ? currentUser.id + selectedUser.id
        : selectedUser.id + currentUser.id;

    const docSnap = await getDoc(doc(db, "chats", combinedId));

    if (!docSnap.exists()) {
      await setDoc(doc(db, "chats", combinedId), {
        messages: [],
      });
    }

    await updateDoc(doc(db, "userschat", currentUser.id), {
      [combinedId + ".userInfo"]: {
        username: selectedUser.username,
        id: selectedUser.id,
        userImg: selectedUser.userImg,
        email: selectedUser.email,
        profession: selectedUser.profession,
        dateofbirth: selectedUser.dateofbirth,
        number: selectedUser.number,
        gender: selectedUser.gender,
        date: serverTimestamp(),
      },
    });
    await updateDoc(doc(db, "userschat", selectedUser.id), {
      [combinedId + ".userInfo"]: {
        username: currentUser.username,
        id: currentUser.id,
        img: currentUser.userImg,
        date: serverTimestamp(),
      },
    });
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
        {Object.entries(userChats).map((user) => (
          <SidebarUser
            key={user[0]}
            user={user[1].userInfo}
            messageDetails={user[1].lastMessage}
          />
        ))}
      </div>
      <button onClick={handleLogout} className="logoutBtn">
        Logout
      </button>
    </div>
  );
}

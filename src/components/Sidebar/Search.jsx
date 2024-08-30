import React, { useContext, useState } from "react";
import { Plus } from "phosphor-react";
import "./Sidebar.css";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { UserContext } from "../../store/UserContext";

export default function Search({ setUser, inputValue, setInputValue }) {
  const { currentUser } = useContext(UserContext);

  function handleKeySearch(e) {
    if (e.key === "Enter") {
      handleUserSearch();
    }
  }

  async function handleUserSearch() {
    const q = query(
      collection(db, "users"),
      where("username", "==", inputValue)
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const foundUser = doc.data();
      if (foundUser.email == currentUser.email) {
        setUser(null);
      } else {
        setUser(doc.data());
      }
    });

    if (querySnapshot.empty) {
      setUser(null);
    }
  }

  return (
    <div className="search">
      <input
        onKeyDown={handleKeySearch}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        placeholder="Search conversations..."
        value={inputValue}
      />
      <button onClick={handleUserSearch}>
        <Plus size={28} />
      </button>
    </div>
  );
}

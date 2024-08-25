import React from "react";
import { MagnifyingGlass, PlusCircle, Plus } from "phosphor-react";
import "./Sidebar.css";

export default function Search() {
  return (
    <div className="search">
      <input type="text" placeholder="Search conversations" />
      <button>
        <Plus size={28} />
      </button>
    </div>
  );
}

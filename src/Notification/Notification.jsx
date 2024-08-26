import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Notification() {
  return (
    <div>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
}

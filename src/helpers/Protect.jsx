import React, { useContext, useEffect } from "react";
import { UserContext } from "../store/UserContext";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Protect({ children }) {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  if (!currentUser) {
    return <Navigate to={"/login"} />;
  }
  return <>{children}</>;
}

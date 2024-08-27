import React, { useContext, useEffect, useState } from "react";
import "./Auth.css";
import { Link, Navigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { UserContext } from "../../store/UserContext";
import { toast } from "react-toastify";

export default function Login() {
  const { currentUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  async function handleUserLogin(e) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);

    await signInWithEmailAndPassword(auth, email, password)
      .then((userDetails) => {
        setLoading(false);
        toast.success("Successfuly logged in");
      })
      .catch((err) => {
        toast.error(err.code);
      });
  }

  if (!loading && currentUser) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="authContainer">
      <h2>Login</h2>
      <form onSubmit={handleUserLogin} className="inputAreaAuth">
        <div className="control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <div className="authActions">
          <button>{loading ? "Loading" : "Continue"}</button>
          <p>
            Don't have account?<Link to={"/register"}>Register here</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

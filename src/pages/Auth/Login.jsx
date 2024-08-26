import React from "react";
import "./Auth.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="authContainer">
      <h2>Login</h2>
      <form className="inputAreaAuth">
        <div className="control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <div className="authActions">
          <button>Continue</button>
          <p>
            Don't have account?<Link to={"/register"}>Register here</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

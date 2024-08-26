import React from "react";
import "./Auth.css";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
createUserWithEmailAndPassword;
import { db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";

export default function Register() {
  async function handleUserRegister(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { username, email, password } = Object.fromEntries(formData);

    const createUser = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await setDoc(doc(db, "users", createUser.user.uid), {
      username,
      email,
      password,
    });

    await setDoc(doc(db, "userschat", createUser.user.uid), {});
  }
  return (
    <div className="authContainer">
      <h2>Register</h2>
      <form onSubmit={handleUserRegister} className="inputAreaAuth">
        <div className="control">
          <label htmlFor="Username">Username</label>
          <input type="text" name="username" id="username" />
        </div>
        <div className="control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <div className="fileControl">
          <label htmlFor="Select Image"></label>
          <input type="file" name="image" />
        </div>
        <div className="authActions">
          <button>Continue</button>
          <p>
            Have an account? <Link to={"/login"}>Log in here</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

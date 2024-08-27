import React, { useContext, useState } from "react";
import "./Auth.css";
import { Link, Navigate } from "react-router-dom";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
createUserWithEmailAndPassword;
import { db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { UserContext } from "../../store/UserContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Register() {
  const { addUser, currentUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  async function handleUserRegister(e) {
    e.preventDefault();
    setLoading(true);
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
      id: createUser.user.uid,
    });

    await setDoc(doc(db, "userschat", createUser.user.uid), {});

    addUser(createUser.user.uid);
    setLoading(false);
    toast.success("Account created welcome to chatApp");
  }

  if (!loading && currentUser) {
    return <Navigate to={"/"} />;
  }

  console.log(currentUser);

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
          <button>{loading ? "Loading" : "Continue"}</button>
          <p>
            Have an account? <Link to={"/login"}>Log in here</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

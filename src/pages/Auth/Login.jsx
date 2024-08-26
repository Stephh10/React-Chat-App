import React, { useContext, useEffect } from "react";
import "./Auth.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { UserContext } from "../../store/UserContext";

export default function Login() {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  async function handleUserLogin(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);

    await signInWithEmailAndPassword(auth, email, password)
      .then((userDetails) => {
        console.log(userDetails.user);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser]);

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
          <button>Continue</button>
          <p>
            Don't have account?<Link to={"/register"}>Register here</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

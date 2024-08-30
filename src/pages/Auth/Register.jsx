import React, { useContext, useState } from "react";
import "./Auth.css";
import { Link, Navigate } from "react-router-dom";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
createUserWithEmailAndPassword;
import { db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { UserContext } from "../../store/UserContext";
import { toast } from "react-toastify";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";

export default function Register() {
  const { addUser, currentUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  async function handleUserRegister(e) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const {
      username,
      email,
      password,
      file,
      gender,
      dateofbirth,
      profession,
      number,
    } = Object.fromEntries(formData);

    const [year, month, day] = dateofbirth.split("-");
    const formatedDate = `${day}-${month}-${year}`;

    const createUser = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const storageRef = ref(storage, username);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        toast.error(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          await setDoc(doc(db, "users", createUser.user.uid), {
            username,
            email,
            password,
            profession,
            number,
            gender,
            dateofbirth: formatedDate,
            id: createUser.user.uid,
            userImg: downloadURL,
          });

          await setDoc(doc(db, "userschat", createUser.user.uid), {});

          addUser(createUser.user.uid);
          setLoading(false);
          toast.success("Account created welcome to chatApp");
        });
      }
    );
  }

  if (!loading && currentUser) {
    return <Navigate to={"/"} />;
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
        <div className="controlRow">
          <div className="control row">
            <label htmlFor="Username">Profession</label>
            <input type="text" name="profession" id="profession" />
          </div>
          <div className="control">
            <label htmlFor="Username">Date of Birth</label>
            <input type="date" name="dateofbirth" id="dateofbirth" />
          </div>
        </div>

        <div className="control">
          <label htmlFor="Username">Number</label>
          <input type="number" name="number" id="number" />
        </div>

        <div className="control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <div>
          <select name="gender" className="selectControl">
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
        </div>
        <div className="fileControl">
          <label htmlFor="Select Image"></label>
          <input type="file" name="file" />
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

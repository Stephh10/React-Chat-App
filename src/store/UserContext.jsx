import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { db } from "../firebase";
import { getDoc, doc } from "firebase/firestore";

export const UserContext = createContext({
  currentUser: null,
  isLoading: true,
  showInfo: true,
  handleInfoComponent: () => {},
  addUser: () => {},
});

export default function UserContextProvider({ children }) {
  const [state, setState] = useState({ currentUser: null, isLoading: true });
  const [info, setInfo] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        addUser(user.uid);
      } else {
        setState({ currentUser: null, isLoading: false });
      }
    });
  }, []);

  async function addUser(uid) {
    const user = await getDoc(doc(db, "users", uid));
    setState({ currentUser: user.data(), isLoading: false });
  }

  function handleInfoComponent(value) {
    setInfo(value);
  }

  const userContext = {
    currentUser: state.currentUser,
    isLoading: state.isLoading,
    addUser,
    showInfo: info,
    handleInfoComponent,
  };

  return (
    <UserContext.Provider value={userContext}>{children}</UserContext.Provider>
  );
}

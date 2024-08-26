import Main from "./pages/Main/Main";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import { Routes, Route } from "react-router-dom";
import Protect from "./helpers/Protect";
import { useContext } from "react";
import { UserContext } from "./store/UserContext";

function App() {
  const { isLoading } = useContext(UserContext);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Protect>
              <Main />
            </Protect>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;

import Main from "./pages/Main/Main";
import Register from "./pages/Auth/Register";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;

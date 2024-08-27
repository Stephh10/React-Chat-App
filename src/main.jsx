import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import UserContextProvider from "./store/UserContext.jsx";
import ChatContextProvider from "./store/ChatContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ChatContextProvider>
      <UserContextProvider>
        <StrictMode>
          <App />
        </StrictMode>
      </UserContextProvider>
    </ChatContextProvider>
  </BrowserRouter>
);

import { createContext, useReducer } from "react";
import { reducerFunc } from "./ChatReducer";

export const ChatContext = createContext({
  chatDetails: null,
  selectChat: null,
});

export default function ChatContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducerFunc, {
    user: null,
    chatId: null,
  });

  function selectChat(currentUser, selectedUser) {
    dispatch({
      type: "SELECT_CHAT",
      payload: {
        currentUser,
        selectedUser,
      },
    });
  }

  const chatContext = {
    chatDetails: state,
    selectChat,
  };

  return (
    <ChatContext.Provider value={chatContext}>{children}</ChatContext.Provider>
  );
}

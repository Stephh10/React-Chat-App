export const reducerFunc = (state, action) => {
  if (action.type === "SELECT_CHAT") {
    const currentId = action.payload.currentUser.id;
    const selectedUserId = action.payload.selectedUser.id;

    const combinedId =
      currentId > selectedUserId
        ? currentId + selectedUserId
        : selectedUserId + currentId;

    return { user: action.payload.selectedUser, chatId: combinedId };
  }
  return state;
};

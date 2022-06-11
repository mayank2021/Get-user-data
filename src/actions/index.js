export const addUser = (users) => {
  return {
    type: "ADD_USER",
    users,
  };
};

export const selectedUser = (selectedUser) => {
  return {
    type: "SELECTED_USER",
    selectedUser,
  };
};

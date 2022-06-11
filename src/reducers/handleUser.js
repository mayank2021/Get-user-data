const initialState = {
  allUser: [],
  selectedUser: {},
};

const handleUsers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return { ...state, allUser: action.users };
    case "SELECTED_USER":
      return { ...state, selectedUser: action.selectedUser };
    default:
      return state;
  }
};

export default handleUsers;

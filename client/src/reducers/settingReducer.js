import { SET_USERNAME, SET_DARKMODE, SET_SELECTED } from "../actions/type";

const initialState = {
  // QUESTION : username을 객체로 받는 이유는?
  username: "Guest", // TODO : validation
  darkMode: false,
  currentPath: "comments",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return { ...state, username: action.payload };

    case SET_DARKMODE:
      return { ...state, darkMode: action.payload };

    case SET_SELECTED:
      return { ...state, currentPath: action.payload };
    default:
      return state;
  }
};

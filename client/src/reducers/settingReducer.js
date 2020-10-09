import { SET_USERNAME, SET_DARKMODE } from "./type";

const initialState = {
  // QUESTION : username을 객체로 받는 이유는?
  username: "Guest", // TODO : validation
  darkMode: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return { ...state, username: action.payload };
    /*
        {username}
      */
    case SET_DARKMODE:
      return { ...state, darkMode: action.payload };
    default:
      return state;
  }
};

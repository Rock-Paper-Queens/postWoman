import { SET_DARKMODE, SET_USERNAME } from "./type";

export const setDarkmode = (isDarkMode) => {
  return {
    type: SET_DARKMODE,
    payload: isDarkMode,
  };
};

export const setUsername = (username) => {
  return {
    type: SET_USERNAME,
    payload: username,
  };
};

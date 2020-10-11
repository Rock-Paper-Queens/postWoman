import { SET_DARKMODE, SET_USERNAME, SET_SELECTED } from "./type";

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

export const setSelected = (path) => {
  return {
    type: SET_SELECTED,
    payload: path,
  };
};

/*
nav -> click -> action(NAV_SELECTIONS) -> reducer: state화 
-> 각각의 페이지에서 -> active화

onClick={setSelected} -> reducer {path => store} 
// navigation 에서 mapStateToProps -> active 처리  

*/

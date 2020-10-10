import { SEARCH_COMMENT } from "../actions/type";

export default (state = [], action) => {
  switch (action.type) {
    case SEARCH_COMMENT:
      return action.payload;
    default:
      return state;
  }
};

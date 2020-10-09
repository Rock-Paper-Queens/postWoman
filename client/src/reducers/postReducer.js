import _ from "lodash";
import {
  FETCH_POST, // -> json DB
  FETCH_POSTS,
  CREATE_POST, // -> json placeHolder
  EDIT_POST,
  DELETE_POST,
} from "./type";

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_POST:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_POST:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_POSTS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case EDIT_POST:
    // return {...state, action.payload}
    case DELETE_POST:
    // return {...state, action.payload};
    default:
      return state;
  }
};

/*
1: {
  "userName": "test1",
  "content": "asld asdlkjga skjhkas ha jung asl",
  "id": 1,
  "img-url": "http://alsdkfjalkdsjfl.com",
  "likes": 34,
  "reply": [
    2: {
      "userName": "paul",
      "content": "donjoe",
      "reply-id": 2,
      "likes": 34
    },
    3: {
      "userName": "hailey",
      "content": "Redux is horrible!",
          "reply-id": 2,
          "likes": 34
        }
      ]
    },
    
    */

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};

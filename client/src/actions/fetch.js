import { FETCH_POST, FETCH_POSTS } from "./type";
import postwoman from "../apis/postwoman";

export const fetchPost = (id) => async (dispatch) => {
  const response = await postwoman.get(`/comments/${id}`);
  dispatch({
    type: FETCH_POST,
    payload: response,
  });
};

export const fetchPosts = () => async (dispatch) => {
  const response = await postwoman.get("/comments");
  // console.log(response.data);
  dispatch({ type: FETCH_POSTS, payload: response.data });
};

import {
  CREATE_POST, // -> json placeHolder
  EDIT_POST,
  DELETE_POST,
} from "./type";
import postwoman from "../apis/postwoman";

// TODO : fetch jsonplaceholder

export const createPost = (formValue) => async (dispatch) => {
  // ANCHOR : 미래의 나야... 유저내임에서 에러떳지? 이걸꺼야...
  const response = await postwoman.post("/comments", { ...formValue });
  dispatch({ type: CREATE_POST, payload: response.data });
};
export const editPost = (id, formValue) => async (dispatch) => {
  const response = await postwoman.patch(`/comments/${id}`, { ...formValue });
  dispatch({ type: EDIT_POST, payload: response.data });
};
export const deletePost = (id) => async (dispatch) => {
  await postwoman.delete("/comments");
  dispatch({ type: DELETE_POST, payload: id });
};

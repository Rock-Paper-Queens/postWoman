import _ from "lodash";
import {
  CREATE_REPLY, // -> json placeHolder
  EDIT_REPLY,
  DELETE_REPLY,
} from "./type";

export const createReply = (parentId, updatedComment) => async (dispatch) => {
  const response = await posts.patch(`/posts/${parentId}`, {
    ...updatedComment,
  });
  dispatch({ type: CREATE_REPLY, payload: response.data });
};

// form 에 내가 썻던 내용을 수정한다
// 이 수정한 데이터값을 받아와서,
// post:id 를 수정해줘야한다.
// useEffect(
//   create -> push
//   edit -> find -> spilce
//   delete -> spilce
// )

// post = id
// reply = parent id
//
//
//
//

export const editReply = (parentId, updatedComment) => async (dispatch) => {
  const response = await posts.patch(`/posts/${parentId}`, {
    ...updatedComment,
  });
  dispatch({ type: EDIT_REPLY, payload: response.data });
};

export const deleteReply = (parentId, updatedComment) => async (dispatch) => {
  await posts.patch(`/posts/${parentId}`, {
    ...updatedComment,
  });
  dispatch({ type: DELETE_REPLY, payload: response.data });
};

//   export const fetchPost = (id) => async (dispatch) => {
//   const response = await posts.get(`/posts/${id}`);
//   dispatch({
//     type: FETCH_POST,
//     payload: response.data,
//   });
// };

// export const fetchPosts = () => async (dispatch) => {
//   const response = await posts.get("/posts");
//   dispatch({ type: FETCH_POSTS, payload: response.data });
// };

import {
  SET_USERNAME,
  SET_DARKMODE,
  FETCH_POST, // -> json DB
  FETCH_POSTS,
  CREATE_POST, // -> json placeHolder
  EDIT_POST,
  DELETE_POST,
  CREATE_REPLY,
  EDIT_REPLY,
  DELETE_REPLY,
  SEARCH_COMMENT,
  FILTER_USER,
} from "./type";

// TODO
// export const filterUser = (selectedUser) => async (dispatch, getState) => {
//   // link 를 클릭하면 profile/username
//   // 그 profile 안에는 그 유저의 포스트 데이터가 리스트화 되어있다.
//   // postdata 를 fetch한다.
//   // 그다음
//   // filterUser 를 돌려서 state에서 selectedUser를 갖고와서 selectuser === element.username post data 를  return 한다

//   // searchValue -> fetch -> dispatch({ type: SEARCH_COMMENT, payload: response.data.contain(searchValue) })
// }

//TODO
// import type from './type'

// export const createReply = (id, formValue) => async (dispatch, getState) => {
//   const { postId}
//   const response = await posts.post('/posts/${postId}', {...formValue})
//   dispatch({type: CREATE_REPLY, payload: response.data});
// }
// export const editReply = (id, formValue) => async (dispatch) => {
//   const response = await posts.patch(`/posts/${id}`, { ...formValue})
//   dispatch({type: EDIT_REPLY, payload: response.data});
// }
// export const deleteReply = (id) => async (dispatch) => {
//   const response = await posts.delete('/posts')
//   dispatch({type: DELETE_REPLY, payload: id});
// }

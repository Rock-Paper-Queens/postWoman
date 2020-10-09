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

import { filter, includes } from "lodash/collection";
import { SEARCH_COMMENT } from "./type";

export const searchComment = (searchValue) => async (dispatch) => {
  const response = await posts.get("/posts");
  const result = _.filter(response.data, (data) =>
    _.includes(data.content, searchValue)
  );
  dispatch({ type: SEARCH_COMMENT, payload: result });

  // searchValue -> fetch -> dispatch({ type: SEARCH_COMMENT, payload: response.data.contain(searchValue) })
  // action의 영역 : reducer에게 필요한 정보를 전달하는 역할
  // reducer의 영역 : state를 바꿔주는 역할

  // reducer -> state update
  // searchTerm
  // searchedResult

  // reducer : 대체하는 역할
  // term이라는 state ->  그 스테이트를 가지고 원하는 정보를 불러온다음 -> reducer 통과시켜서 result 새로운 스테이트를 만들어준다.
  // sponse.data.contain(searchValue) <- 얘를 기존 스테이트에서 제거 된 상태로 리턴을 해준다

  // searchCOmment data searchValue 에 맞게

  // state에서 끌어오는 것인가
  // db에서 끌어오는 것인가
};

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

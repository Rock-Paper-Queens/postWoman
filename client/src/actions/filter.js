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

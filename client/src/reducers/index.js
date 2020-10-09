import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import postReducer from "./postReducer";

/*
1. 유저가 세팅에 들어가서, 본인의 유저네임과 다크모드 설정 여부를 결정한다. 
-> settingReducer

2. 삭제 혹은 수정을 할 때 id와 username 가 필요하다. // 유저가 edit/delete 눌렀을 때 해당 post 를 스테이트로 받아야된다. 
-> postReducer 

3. 유저가 createPost 를 했을때 jsonData 값이 변하고 따라서 posts 가 변하기 때문에 
-> postReducer 

1                 2          3 
list -> map -> Entries -> replies(코멘트 댓글)  
      state     comment   comment.reply
local : entries : like 클릭했을 때 count++
local : replies : isOpen

// NOTE : Global vs local
Global State 
local stat

4. 유저가 댓글버튼을 클릭했을 때 이 jsonDB reply 가 post 소속되어있는가 아닌가?
*/

export default combineReducers({
  form: formReducer,
  posts: postReducer, // posts, post,
  settings: settingReducer, //darkMode, username
  search: searchReducer, // term, debouncedTerm, searchResult
});

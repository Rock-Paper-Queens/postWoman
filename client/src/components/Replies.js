/*
const [comment, setComment] = useState({})

useEffect(() => {
  setComment(fetchPost(id))
}, []) // 1번만 코멘트 정보밖에 없습니다

useEffect(() => {
  const data = {...comment.replies.push(formValues)}
  createReply(id, data) // id
  -> createReply {...state, [action.payload.id]: action.payload}
}, ?)

useEffect(
  create -> push
  edit -> find -> spilce
)

CREATE_POST
return { ...state, [action.payload.id]: action.payload };

먼저 현재 브라우저가 들어가있는 아이디에 따라서, 그 코멘트를 불러온다 => 이것은 comment 
[reply] 가 바뀔때마다 이 코멘트 데이터에다가 우리의 reply 를 추가시켜서 이 새로운 정보를 
createReply(newReply)

// 리플라이를 업데이트 하는 작업 
*/

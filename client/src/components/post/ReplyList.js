import React from "react";
// import { connect } from "react-redux";
import ReplyEntry from "./ReplyEntry.js";
// import { createReply } from "../../actions/reply";

const ReplyList = ({ parentId, replies }) => {
  const renderReplyEntires = () => {
    return replies.map((reply) => {
      return <ReplyEntry key={reply.id} reply={reply} />;
    });
  };

  return <div className="comments">{renderReplyEntires()}</div>;
};

export default ReplyList;

/*
<div class="ui comments">
  <h3 class="ui dividing header">Comments</h3>
  <div class="comment">
    <a class="avatar">
      <img src="/images/avatar/small/matt.jpg">
    </a>
    <div class="content">
      <a class="author">Matt</a>
      <div class="metadata">
        <span class="date">Today at 5:42PM</span>
      </div>
      <div class="text">
        How artistic!
      </div>
      <div class="actions">
        <a class="reply">Reply</a>
      </div>
    </div>
  </div>
  <div class="comment">
    <a class="avatar">
      <img src="/images/avatar/small/elliot.jpg">
    </a>
    <div class="content">
      <a class="author">Elliot Fu</a>
      <div class="metadata">
        <span class="date">Yesterday at 12:30AM</span>
      </div>
      <div class="text">
        <p>This has been very useful for my research. Thanks as well!</p>
      </div>
      <div class="actions">
        <a class="reply">Reply</a>
      </div>
    </div>
    <div class="comments">
      <div class="comment">
        <a class="avatar">
          <img src="/images/avatar/small/jenny.jpg">
        </a>
        <div class="content">
          <a class="author">Jenny Hess</a>
          <div class="metadata">
            <span class="date">Just now</span>
          </div>
          <div class="text">
            Elliot you are always so right :)
          </div>
          <div class="actions">
            <a class="reply">Reply</a>
          </div>
        </div>
      </div>
    </div>
  </div>


  */
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

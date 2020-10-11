// if(isOpen) { // Rendering 을 하는 친구의 목적이고
//   만약에 오픈 플래그 섰다면,
//   fetchPost(id) => payload.reply
//   listEntry의 local state => reply []
//   map? 3 -> replies.map(reply) => <Reply key={id} reply={reply} />
//   id => fetchPost (해당 comment를 가져오고) => payload.reply => reply: payload.reply
//   -> this.props......reply => map fetchReply(payload.reply) -> original
// } else {

// }

import React, { useState } from "react";
import ReplyList from "./ReplyList";

const CommentEntry = ({ comment }) => {
  const [isOpen, setIsOpen] = useState(true);
  console.log(comment);

  const renderReply = () => {
    if (isOpen) {
      return <ReplyList parentId={comment.id} replies={comment.replies} />;
    } else {
      return null;
    }
  };

  /*
    display: none -> display: block 
  */
  // comment.id === parentId
  // isOpen -> reply on off

  /*
    Reply 를 클릭을 했을 때 -> 아래의 replylist 의 style 을 display:none -> block 으로 바꿔준다. 

  */
  return (
    <React.Fragment>
      <div className="comment">
        <a className="avatar">
          <img src={comment.url} />
        </a>
        <div className="content">
          <a className="author">{comment.userName}</a>
          <div className="metadata">
            <span className="date">Today at 5:42PM</span>
          </div>
          <div className="text">{comment.content}</div>
          <div className="actions">
            <a className="reply">Reply</a>
          </div>
        </div>
        {renderReply()}
      </div>
    </React.Fragment>
  );
};

export default CommentEntry;

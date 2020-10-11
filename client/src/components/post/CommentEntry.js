import React, { useState } from "react";
import ReplyList from "./ReplyList";
import CommentForm from "./CommentForm";

import { formatDistance, formatRelative, subDays } from "date-fns";
import { ko } from "date-fns/locale";

const CommentEntry = ({ comment }) => {
  const [isOpen, setIsOpen] = useState(false);

  const renderReply = () => {
    if (isOpen) {
      return (
        <>
          <CommentForm />
          <ReplyList parentId={comment.id} replies={comment.replies} />
        </>
      );
    } else {
      return null;
    }
  };
  // What is the distance from 1 January 2016
  // to 1 January 2015, with a suffix?

  //=> 'about 1 year ago'

  // console.log(
  //   formatDistance(new Date(), new Date(2016, 0, 1), {
  //     addSuffix: true,
  //   }),
  //   comment.date.slice(0, 4), comment.date.slice(5, 7), comment.date.slice()
  // ); // 2020-10-11T13:32:29.290Z

  // FIXME : new Date

  return (
    <React.Fragment>
      <div className="comment">
        <a className="avatar">
          <img src={comment.thumbnailUrl} />
        </a>
        <div className="content">
          <a className="author">{comment.userName}</a>
          <div className="metadata">
            <span className="date">
              {formatDistance(new Date(comment.date), new Date(), {
                addSuffix: true,
                locale: ko,
              })}
            </span>
          </div>
          <div className="text">{comment.content}</div>
          <div className="actions">
            <a className="reply" onClick={() => setIsOpen(!isOpen)}>
              Reply
            </a>
          </div>
        </div>
        {renderReply()}
      </div>
    </React.Fragment>
  );
};

export default CommentEntry;

// if(isOpen) { // Rendering 을 하는 친구의 목적이고
//   만약에 오픈 플래그 섰다면,
//   fetchPost(id) => payload.reply
//   listEntry의 local state => reply []
//   map? 3 -> replies.map(reply) => <Reply key={id} reply={reply} />
//   id => fetchPost (해당 comment를 가져오고) => payload.reply => reply: payload.reply
//   -> this.props......reply => map fetchReply(payload.reply) -> original
// } else {
// }

/*
    display: none -> display: block 
  */
// comment.id === parentId
// isOpen -> reply on off

/*
    Reply 를 클릭을 했을 때 -> 아래의 replylist 의 style 을 display:none -> block 으로 바꿔준다. 

  */

// <span className="date">
//   {formatDistance(subDays(comment.date, 1), new Date(), {
//     locale: ko,
//   })}
// </span>;

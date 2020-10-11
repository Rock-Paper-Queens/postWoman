import React from "react";

const ReplyEntry = ({ reply }) => {
  console.log(reply);
  return (
    <div className="comment">
      <a className="avatar">
        <img src={reply.url} />
      </a>
      <div className="content">
        <a className="author">{reply.userName}</a>
        <div className="metadata">
          <span className="date">Today at 5:42PM</span>
        </div>
        <div className="text">{reply.content}</div>
      </div>
    </div>
  );
};

export default ReplyEntry;

import React from "react";
import "./Reply.css";

const Reply = ({ reply }) => {
  return (
    <div className="reply-container">
      <div className="reply-header">
        <p className="reply-username">{reply.user.userName}</p>
        <p className="reply-timestamp">{reply.dateCreated}</p>
      </div>
      <div className="reply-content">
        <p>{reply.content}</p>
      </div>
    </div>
  );
};

export default Reply;

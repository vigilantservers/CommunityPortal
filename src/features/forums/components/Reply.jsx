import React from "react";

const Reply = ({ reply }) => {
  return (
    <div className="reply-container">
      <div className="reply-header">
        <p className="reply-username">{reply.username}</p>
        <p className="reply-timestamp">{reply.dateCreated}</p>
      </div>
      <div className="reply-content">
        <p>{reply.content}</p>
      </div>
    </div>
  );
};

export default Reply;
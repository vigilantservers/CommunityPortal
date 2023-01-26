import React from "react";
import "./Topic.css";

const Topic = ({ topic }) => {
  return (
    <div className="topic">
      <div className="topic-container">
        <div className="topic-header">
          <h1>Title: {topic.data.title}</h1>
          <button class="topic-settings-btn">&#9776;</button>
          <div class="kebab-menu">
            <a href="#">Option 1</a>
            <a href="#">Option 2</a>
            <a href="#">Option 3</a>
          </div>
        </div>
        <div className="topic-grid">
          <div className="topic-left">
            <div className="topic-userinfo">
              <img
                src={topic.data.user.avatar}
                alt="user-profile"
                className="topic-header-user-image"
              />
              <span className="topic-header-user-name">
                {topic.data.user.userName}
              </span>
            </div>
          </div>
          <div className="topic-content">
            <div
              className="topic-description"
              dangerouslySetInnerHTML={{ __html: topic.data.content }}
            />
          </div>
        </div>
        <div className="topic-footer">
          <div className="topic-meta">
            <p>
              Date created:{" "}
              {new Date(topic.data.dateCreated).toLocaleDateString()}
            </p>
            {topic.dateEdited !== "0001-01-01T00:00:00" && (
              <p>
                Date Edited:{" "}
                {new Date(topic.data.dateEdited).toLocaleDateString()}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topic;

import React, { useState, useEffect } from "react";
import axios from "axios";
import RecentPost from "../RecentPost";
import Widget from "./Widget";

const RecentPostsWidget = () => {
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:7174/api/Topics/getall")
      .then((res) => {
        const topics = res.data.data;
        const sortedTopics = topics
          .sort((a, b) => new Date(b.dateCreated) - new Date(a.dateCreated))
          .slice(0, 3);

        setRecentPosts(sortedTopics);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Widget title="Recent Posts">
      <ul className="recent-posts-list">
        {recentPosts.map((post) => (
          <RecentPost
            key={post.id}
            title={post.title}
            author={post.userId}
            date={post.dateCreated}
          />
        ))}
      </ul>
    </Widget>
  );
};

export default RecentPostsWidget;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Category } from "../components/";
import { RecentPostsWidget, DiscordWidget } from "../components/widgets";
import "./ForumsPage.css";

const ForumsPage = () => {
  const [topics, setTopics] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getTopics = async () => {
      const res = await axios.get("https://localhost:7174/api/Topics/getall");
      setTopics(res.data.data);
    };
    getTopics();
  }, []);

  useEffect(() => {
    if (topics.length > 0) {
      const uniqueCategories = [
        ...new Set(topics.map((topic) => topic.categoryName)),
      ];
      setCategories(uniqueCategories);
    }
  }, [topics]);

  return (
    <div className="forum-page">
      <div className="categories">
        {categories.map((category) => (
          <Category
            key={category}
            categoryName={category}
            topics={topics.filter((topic) => topic.categoryName === category)}
          />
        ))}
      </div>
      <div className="widget-container">
        <RecentPostsWidget />
        <DiscordWidget />
      </div>
    </div>
  );
};

export default ForumsPage;

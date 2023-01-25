import React from "react";
import "./Category.css";

const Category = ({ categoryName, topics }) => {
  return (
    <div className="category">
      <div className="category-header">
        <h1>{categoryName}</h1>
      </div>
      <ul className="topic-list">
        {topics.map((topic) => (
          <li key={topic.id}>{topic.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Category;

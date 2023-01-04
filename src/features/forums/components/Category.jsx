import React from 'react';
import './Category.css';

const Category = () => {
  return (
    <div className="category">
      <div className="category-header">
        <h1>Category Title</h1>
        <p>Category Subtitle</p>
      </div>
      <ul className="topic-list">
        <li>Topic 1</li>
        <li>Topic 2</li>
        <li>Topic 3</li>
      </ul>
    </div>
  );
}

export default Category;
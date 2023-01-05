import React from 'react';
import './RecentPost.css';

const RecentPost = ({ title, author, date }) => {
  return (
    <li className="recent-post">
      <h2>{title}</h2>
      <p>By {author} on {date}</p>
    </li>
  );
}

export default RecentPost;
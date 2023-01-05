// RecentPostsWidget.jsx
import React from 'react';
import RecentPost from '../RecentPost';
import Widget from './Widget';

const RecentPostsWidget = () => {
  return (
    <Widget title="Recent Posts">
      <ul className="recent-posts-list">
        <RecentPost
          title="Post 1"
          author="Author 1"
          date="Jan 1, 2023"
        />
        <RecentPost
          title="Post 2"
          author="Author 2"
          date="Jan 2, 2023"
        />
        <RecentPost
          title="Post 3"
          author="Author 3"
          date="Jan 3, 2023"
        />
      </ul>
    </Widget>
  );
}

export default RecentPostsWidget;

import React from 'react';
import {Category} from '../components/';
import {RecentPostsWidget, DiscordWidget} from '../components/widgets'
import './ForumsPage.css';

const ForumsPage = () => {
  return (
    <div className="forum-page">
      <div className="categories">
        <Category />
        <Category />
        <Category />
      </div>
      <div className="widget-container">
        <RecentPostsWidget />
        <DiscordWidget/>
      </div>
  </div>
  );
};

export default ForumsPage;


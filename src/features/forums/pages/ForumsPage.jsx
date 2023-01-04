import React from 'react';
import {Category, Widget} from '../components/';

const ForumsPage = () => {
  return (
    <div className="forum-page">
    <div className="categories">
      <Category />
      <Category />
      <Category />
    </div>
    <div className="widget-container">
      <Widget />
    </div>
  </div>
  );
};

export default ForumsPage;


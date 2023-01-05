import React from 'react';
import './Widget.css';

const Widget = ({ title, children }) => {
  return (
    <div className="widget">
      <div className="widget-header">
        <h1>{title}</h1>
      </div>
      <div className="widget-content">
        {children}
      </div>
    </div>
  );
}

export default Widget;
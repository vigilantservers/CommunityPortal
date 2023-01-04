// 404 error component
import React from 'react';
import { Link } from 'react-router-dom';
import './Error404.css';

const Error404 = () => (
    <div className="error-container">
      <div className="error">
        <img src="https://i0.wp.com/adamlichtenberg.com/wp-content/uploads/2016/03/404-1.png" alt="404 error"/>
        <h1>Page Not Found</h1>
        <p>
            The page you are looking for does not exist. You can always go back to
            the <Link style={{textDecoration: 'none', color: 'red'}} to="/">homepage</Link>
        </p>
        </div>
    </div>

    );

export default Error404;
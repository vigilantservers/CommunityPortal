import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ForumContext } from '../../../context/';

const Logout = () => {
  const context = useContext(ForumContext);
  const { setUser } = context;
  const navigate = useNavigate();

  useEffect(() => {
    // Remove the token from the browser's cookie
    Cookies.remove('token');
    // update the user state
   // context.setUser({});
    // Redirect the user to the login page
    navigate('/login');
  }, []); // Run the effect only once

  return null; // Render nothing
};

export default Logout;

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const LogoutPage = () => {
  const navigate = useNavigate();
  useEffect (() => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
    navigate('/');
  }, [navigate]);
};

export default LogoutPage;

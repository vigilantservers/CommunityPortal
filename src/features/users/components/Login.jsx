import "./Login.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // check if the user is already logged in
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      // if yes, redirect to the home page
      navigate('/');
    }
  }, [navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post('https://localhost:7174/api/Auth/login', { email, password });
    console.log(response);
    if(response.status === 200){
      const { accessToken, refreshToken, user } = response.data.data;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('user', JSON.stringify(user));
      // redirect to the home page
      navigate('/');
    } else {
      console.log("Error while trying to login, response status: ", response.status);
    }
  }
  return (
    <div className="login-container">
      <div className="login-header">
        <h1>Login</h1>
      </div>
      <div className="login-content">
      <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p>{error}</p>}
      <button type="submit">Login</button>
    </form>
        <div className="login-footer">
          <div className="register">
            <p>
              <a href="/register">Register here</a>
            </p>
          </div>
          <div className="forgot-password">
            <p>
              <a href="/forgot-password">Forgot your password?</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

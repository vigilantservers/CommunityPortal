import "./Register.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
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
    try {
      const response = await axios.post('https://localhost:7174/api/Auth/register', { email, username, password, confirmPassword, steamid:0 });
      if(response.status === 200){
        navigate('/login');
      } else {
        console.log("Error while trying to register, response status: ", response.status);
      }
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    }
  }
  return (
    <div className="register-container">
      <div className="register-header">
        <h1>Register</h1>
      </div>
      <div className="register-content">
      <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
<input
type="password"
placeholder="Password"
value={password}
onChange={(e) => setPassword(e.target.value)}
/>
<input
type="password"
placeholder="Confirm Password"
value={confirmPassword}
onChange={(e) => setConfirmPassword(e.target.value)}
/>
{error && <p>{error}</p>}
<button type="submit">Register</button>
</form>
<div className="register-footer">
<div className="login">
<p>
<a href="/login">Already have an account?</a>
</p>
</div>
</div>
</div>
</div>
);
};

export default Register;



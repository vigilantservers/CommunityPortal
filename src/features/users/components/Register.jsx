import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import config from '../../../config';
import Cookies from 'js-cookie';
import { ForumContext } from '../../../context/';
import { useNavigate } from 'react-router-dom';

const baseUrl = config.apiBaseUrl;

const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [steamid, setSteamid] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const context = useContext(ForumContext);
  const { setUser } = context;

  // if the user is already logged in, redirect them to the homepage
    const navigate = useNavigate();
    useEffect(() => {
        const token = Cookies.get('token');
        if (token) {
            navigate('/');
        }
    }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }
    axios.post(`${baseUrl}/api/Auth/register`, {
      email,
      username,
      password,
      confirmPassword,
      steamid,
    })
      .then((response) => {
        // Extract the user data from the API response
        const { data } = response;
        // Update the global ForumContext with the new user's information
        setUser({
            id: data.data,
            username,
          });;
      })
      .catch((error) => {
        console.error(error, error.response.data.message);
        setErrorMessage('An error occurred');
      });
  };

  return (
    <ForumContext.Consumer>
    {(context) => (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                <br />
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" value={username} onChange={(event) => setUsername(event.target.value)} />
                <br />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                <br />
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input type="password" id="confirmPassword" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
                <br />
                <label htmlFor="steamid">Steam ID:</label>
                <input type="number" id="steamid" value={steamid} onChange={(event) => setSteamid(event.target.value)} />
                <br />
                <button type="submit">Register</button>
            </form>
        {errorMessage && <p>{errorMessage}</p>}
        </div>
    )}
  </ForumContext.Consumer>
    );
};

export default Register;
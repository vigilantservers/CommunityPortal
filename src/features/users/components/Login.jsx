import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ForumContext } from "../../../context/";
import config from "../../../config";

const baseUrl = config.apiBaseUrl;

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const context = useContext(ForumContext);
  const { setUser, setIsAuthenticated } = context;

  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = Cookies.get("accessToken");
    if (accessToken) {
      navigate("/");
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    axios
      .post(`${baseUrl}/api/Auth/login`, { email, password })
      .then((response) => {
        // Extract the token and user data from the API response
        const { data } = response;
        const { accessToken, refreshToken, user } = data.data;
        // Save the access token in a cookie
        Cookies.set("accessToken", accessToken);
        // Save the refresh token in a cookie
        Cookies.set("refreshToken", refreshToken);
        // Update the user state in the context
        setUser(user);
        // Set the isAuthenticated state in the context to true
        setIsAuthenticated(true);
        // Redirect the user to the homepage
        navigate("/");
      })
      .catch((error) => {
        console.error(error, error.response.data.message);
        setErrorMessage("Invalid email or password");
        setIsLoading(false);
        axios.post(`${baseUrl}/api/Auth/login`, { email, password });
      })
      .then((response) => {
        // Extract the token from the API response
        const { data } = response;
        const { accessToken, refreshToken, user } = data.data; // Extract the access and refresh tokens, and user data from the "data" field
        // Save the tokens in a cookie
        Cookies.set("accessToken", accessToken);
        Cookies.set("refreshToken", refreshToken);
        // Update the user state in the context
        context.setUser({
          token: accessToken,
          user,
        });
        // Redirect the user to the homepage
        navigate("/");
      })
      .catch((error) => {
        console.error(error, error.response.data.message);
        setErrorMessage("Invalid email or password");
        setIsLoading(false);
      });
  };

  return (
    <ForumContext.Consumer>
      {(context) => (
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <br />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <br />
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Loading..." : "Log in"}
            </button>
          </form>
          {errorMessage && <p>{errorMessage}</p>}
        </div>
      )}
    </ForumContext.Consumer>
  );
};

export default Login;

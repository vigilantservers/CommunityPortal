import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-header">
        <h1>Login</h1>
      </div>
      <div className="login-content">
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
          <br />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />
          <br />
          <button type="submit">Log in</button>
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

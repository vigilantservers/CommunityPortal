import "./Navbar.css";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import config from "../config";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const location = useLocation();

  // check if user is logged in
  const user = JSON.parse(localStorage.getItem("user"));
  const accessToken = localStorage.getItem("accessToken");
  const isLoggedIn = user && accessToken;
  const placeholderImage = "https://i.pravatar.cc/150";

  const handleProfileClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav>
      {/* navbar logo */}
      <a href="/" className="logo">
        {config.communityName}
      </a>
      {/* navbar links */}
      <Link to="/" className={location.pathname === "/" ? "active" : ""}>
        Home
      </Link>
      <Link
        to="/forums"
        className={location.pathname === "/forums" ? "active" : ""}
      >
        Forums
      </Link>
      <Link
        to="/users"
        className={location.pathname === "/users" ? "active" : ""}
      >
        Users
      </Link>
      {/* if user is logged in show user menu */}
      {isLoggedIn ? (
        <div
          className="user-menu"
          onClick={handleProfileClick}
          onMouseEnter={handleProfileClick}
          onMouseLeave={handleProfileClick}
        >
          <div className="user-info">
            <img
              src={
                user.avatar && user.avatar !== ""
                  ? user.avatar
                  : placeholderImage
              }
              alt=""
            />
            <span>{user.userName}</span>
          </div>
          {isDropdownOpen && (
            <div className="dropdown">
              <a href="/">View profile</a>
              <a href="/logout">Logout</a>
            </div>
          )}
        </div>
      ) : (
        <div>
          <Link
            to="/login"
            className={location.pathname === "/login" ? "active" : ""}
          >
            Login
          </Link>
          <Link
            to="/register"
            className={location.pathname === "/register" ? "active" : ""}
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import React from "react";
import "./Navbar.css"; // import the css file
import { Link, useLocation } from "react-router-dom";
import config from "../config";
const Navbar = ({ user }) => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const location = useLocation();

  const handleProfileClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const logo = config.communityName;
  return (
    <nav>
      {/* navbar logo */}
      <a href="/" className="logo">
        {logo}
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
      {/* if user logged in show user menu */}
      {user && (
        <div
          className="user-menu"
          onClick={handleProfileClick}
          onMouseEnter={handleProfileClick}
          onMouseLeave={handleProfileClick}
        >
          <div className="user-info">
            <img src={user.profileImageUrl} alt="User profile" />
            <span>{user.username}</span>
          </div>
          {isDropdownOpen && (
            <div className="dropdown">
              <a href="#">View profile</a>
              <a href="#">Logout</a>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

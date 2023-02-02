import React, { useState, useEffect } from "react";
import "./UserList.css";
import { Link } from "react-router-dom";

const UserList = ({ profilesData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [profilesPerPage] = useState(6);

  // Get current profiles
  const indexOfLastProfile = currentPage * profilesPerPage;
  const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;
  const currentProfiles = profilesData.slice(
    indexOfFirstProfile,
    indexOfLastProfile
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const placeholderImage = "https://i.pravatar.cc/150";

  return (
    <div className="user-list">
      <h2>Users</h2>
      <div className="user-profiles">
        {currentProfiles.map((profile) => (
          <Link
            to={`/users/profiles/${profile.id}`}
            className="no-decoration white"
          >
            <div key={profile.id} className="user-profile-square">
              <div className="profile-picture">
                <img
                  src={
                    profile.user.avatar && profile.user.avatar !== ""
                      ? profile.user.avatar
                      : placeholderImage
                  }
                  alt={profile.user.userName}
                />
              </div>
              <div className="profile-info">
                <div className="username">{profile.user.userName}</div>
                <div className="role">{profile.user.role}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div>
        <ul className="pagination">
          {[...Array(Math.ceil(profilesData.length / profilesPerPage))].map(
            (_, i) => (
              <li key={i + 1} className={currentPage === i + 1 ? "active" : ""}>
                <button onClick={() => paginate(i + 1)}>{i + 1}</button>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default UserList;

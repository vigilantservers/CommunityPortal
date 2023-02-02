import React, { useState, useEffect } from "react";
import axios from "axios";
import { UserList } from "../features/users/components";

const UsersPage = () => {
  const [profilesData, setProfilesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://localhost:7174/api/Profiles/getall"
      );
      setProfilesData(result.data.data);
      console.log("Profiles: ", result.data.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      {loading ? <p>Loading...</p> : <UserList profilesData={profilesData} />}
    </div>
  );
};

export default UsersPage;

import React, { useEffect, useState } from 'react';
import Nav from '../Nav/Nav';
import axios from 'axios';
import UserProfile from "../Profile/UserProfile";
import './User.css'; // We'll create this CSS file

function User() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/users");
      setUsers(response.data.users);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching users:", err);
      setError("Failed to load users. Please try again later.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleRefresh = () => {
    setLoading(true);
    fetchUsers();
  };

  return (
    <div className="user-listing-page">
      <Nav />
      
      <div className="user-listing-header">
        <h1>User Profile</h1>
       
      </div>

      {loading ? (
        <div className="user-listing-loading">
          <div className="loading-spinner"></div>
          <p>Loading user profiles...</p>
        </div>
      ) : error ? (
        <div className="user-listing-error">
          <p>{error}</p>
          <button onClick={handleRefresh} className="retry-btn">
            Retry
          </button>
        </div>
      ) : users.length === 0 ? (
        <div className="user-listing-empty">
          <p>No users found. Create a new user to get started.</p>
        </div>
      ) : (
        <div className="user-profiles-container">
          {users.map((user, index) => (
            <div key={user._id || index} className="user-profile-wrapper">
              <UserProfile user={user} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default User;

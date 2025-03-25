import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';  
import axios from 'axios';
import './UserProfileCss.css';

function UserProfile({ user }) {
    const navigate = useNavigate(); // Move useNavigate here
    const [activeTab, setActiveTab] = useState('ACCOUNT');

    // Debugging: Check how often the component renders
    console.log("Rendering UserProfile with user:", user);

    // Check if user data is available
    if (!user || !user._id) {
        return (
            <div className="profile-loading">
                <div className="loading-spinner"></div>
                <p>Loading user data...</p>
            </div>
        );
    }

    const { _id, Fname, Lname, Email_address, ContactNumber, Address, ProfilePhoto } = user;

    // Moved deleteHandler outside of useNavigate hook call
    const deleteHandler = async () => {
        await axios.delete(`http://localhost:5000/users/${_id}`)
            .then(res => res.data)
            .then(() => navigate("/")) 
            .then(() => navigate("/UserProfile"));
    }

    const profileImageSrc = ProfilePhoto
        ? `http://localhost:5000/uploads/${ProfilePhoto}`
        : '';

    return (
        <div className="enhanced-profile-container">
            <div className="profile-sidebar">
                <div className="sidebar-content">
                    <div className="profile-picture-container">
                        <img
                            src={profileImageSrc}
                            alt={`${Fname}'s profile`}
                            className="profile-picture"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = '';  // Prevents infinite loops
                            }}
                        />
                    </div>
                    <h2 className="user-name">{Fname} {Lname}</h2>
                    <p className="user-title">User ID: {_id}</p>
                </div>
            </div>

            <div className="profile-main">
                <div className="profile-tabs">
                    <button
                        className={`tab-button ${activeTab === 'ACCOUNT' ? 'active' : ''}`}
                        onClick={() => setActiveTab('ACCOUNT')}
                    >
                        ACCOUNT
                    </button>
                </div>

                <div className="profile-content">
                    {activeTab === 'ACCOUNT' && (
                        <div className="account-table">
                            <table className="profile-table">
                                <thead>
                                    <tr>
                                        <th>Field</th>
                                        <th>Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>First Name</td>
                                        <td>{Fname}</td>
                                    </tr>
                                    <tr>
                                        <td>Last Name</td>
                                        <td>{Lname}</td>
                                    </tr>
                                    <tr>
                                        <td>Email Address</td>
                                        <td>{Email_address}</td>
                                    </tr>
                                    <tr>
                                        <td>Phone Number</td>
                                        <td>{ContactNumber}</td>
                                    </tr>
                                    <tr>
                                        <td>Address</td>
                                        <td>{Address || 'N/A'}</td>
                                    </tr>
                                    <tr>
                                        <td>Password</td>
                                        <td>••••••••</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="form-actions">
                                <Link to={`/userdetails/${_id}`} className="edit-button">EDIT</Link>
                                <button
                                    onClick={deleteHandler} 
                                    className="delete-button"
                                >
                                    DELETE
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default UserProfile;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './UserProfileCss.css'; // Changed to match your file structure

function UserProfile(props) {
    const navigate = useNavigate();
    const [isDeleting, setIsDeleting] = useState(false);
    const [activeTab, setActiveTab] = useState('ACCOUNT');

    if (!props.user) {
        return (
            <div className="profile-loading">
                <div className="loading-spinner"></div>
                <p>Loading user data...</p>
            </div>
        );
    }

    // Make sure all properties are correctly destructured from props.user
    const { _id, Fname, Lname, Email_address, ContactNumber, Address, ProfilePhoto } = props.user;

    const deleteHandler = async () => {
        if (window.confirm("Are you sure you want to delete this user profile?")) {
            setIsDeleting(true);
            try {
                await axios.delete(`http://localhost:5000/users/${_id}`);
                navigate("/Userdetails");
            } catch (error) {
                console.error("Error deleting user:", error);
                setIsDeleting(false);
                alert("Failed to delete user. Please try again.");
            }
        }
    };

    // Determine profile image source
    const profileImageSrc = ProfilePhoto 
        ? `http://localhost:5000/uploads/${ProfilePhoto}`
        : '/default-avatar.png';

    // Placeholder data for demo purposes - you can remove this in production
    const details = [
        { label: "Detail 1", value: 32 },
        { label: "Detail 2", value: 40 },
        { label: "Detail 3", value: 50 }
    ];

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
                                e.target.src = '/default-avatar.png';
                            }}
                        />
                        <div className="edit-photo-button">
                            <span className="camera-icon">📷</span>
                        </div>
                    </div>
                    <h2 className="user-name">{Fname} {Lname}</h2>
                    <p className="user-title">User ID: {_id}</p>
                    
                    <div className="user-stats">
                        {details.map((detail, index) => (
                            <div key={index} className="stat-item">
                                <div className="stat-label">{detail.label}</div>
                                <div className="stat-value">{detail.value}</div>
                            </div>
                        ))}
                    </div>
                    
                    <button className="view-public-profile-btn">VIEW PUBLIC PROFILE</button>
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
                    <button 
                        className={`tab-button ${activeTab === 'TAB 2' ? 'active' : ''}`}
                        onClick={() => setActiveTab('TAB 2')}
                    >
                        TAB 2
                    </button>
                    <button 
                        className={`tab-button ${activeTab === 'TAB 3' ? 'active' : ''}`}
                        onClick={() => setActiveTab('TAB 3')}
                    >
                        TAB 3
                    </button>
                </div>
                
                <div className="profile-content">
                    {activeTab === 'ACCOUNT' && (
                        <div className="account-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input type="text" value={Fname} readOnly className="form-input" />
                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input type="text" value={Lname} readOnly className="form-input" />
                                </div>
                            </div>
                            
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Middle Name</label>
                                    <input type="text" placeholder="Baker" readOnly className="form-input" />
                                </div>
                                <div className="form-group">
                                    <label>Gender</label>
                                    <select className="form-input">
                                        <option>Female</option>
                                        <option>Male</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input type="text" value={ContactNumber} readOnly className="form-input" />
                                </div>
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input type="email" value={Email_address} readOnly className="form-input" />
                                </div>
                            </div>
                            
                            <div className="form-row">
                                <div className="form-group full-width">
                                    <label>Password</label>
                                    <div className="password-input-container">
                                        <input type="password" value="••••••••" readOnly className="form-input" />
                                        <span className="password-toggle">👁️</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="form-row">
                                <div className="form-group full-width">
                                    <label>Address</label>
                                    <input type="text" value={Address || ''} readOnly className="form-input" />
                                </div>
                            </div>
                            
                            <div className="form-actions">
                                <Link to={`/userdetails/${_id}`} className="edit-button">EDIT</Link>
                            </div>
                        </div>
                    )}
                    
                    {activeTab === 'TAB 2' && (
                        <div className="tab-content">
                            <h3>Tab 2 Content</h3>
                            <p>This is the content for Tab 2.</p>
                        </div>
                    )}
                    
                    {activeTab === 'TAB 3' && (
                        <div className="tab-content">
                            <h3>Tab 3 Content</h3>
                            <p>This is the content for Tab 3.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default UserProfile;
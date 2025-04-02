import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserProfile from './UserProfile';

function ProfilePage() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchUserData() {
            try {
                const response = await axios.get('http://localhost:5000/api/user/profile', { withCredentials: true });
                setUser(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching user data:", error);
                setLoading(false);
            }
        }

        fetchUserData();
    }, []); // Empty dependency array ensures the effect runs only once

    return (
        <div>
            {loading ? <p>Loading...</p> : <UserProfile user={user} />}
        </div>
    );
}

export default ProfilePage;

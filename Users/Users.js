/*

import React, { useEffect, useState } from 'react'
import axios from "axios";
import User from '../User/User';

const URL = "http://localhost:5000/users";

const fetchHandler = async () =>{
    return await axios.get(URL).then((res) => res.data);
}
function Users() {
    const [users, SetUsers] = useState();   
    useEffect(()=> {
        fetchHandler().then((data) => SetUsers(data.users));
    },[])    
    return (
    <div>
        <h1>Student Information</h1>
        <div>
            {users && users.map((user, i) => (
                <div key={user.id}>
                    <User user={user}/>
                </div>
            ))}
        </div>
       
    </div>
  )
}

export default Users

*/


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../Nav/Footer';
import './Users.css';
import Nav from '../Nav/Nav';

const URL = "http://localhost:5000/users";

// Options for dropdowns
const cityOptions = ['Colombo', 'Kandy', 'Galle', 'Kegalle', 'Rathnapure', 'Kurunagala', 'Anuradhapure', 'Polonnaruwa', 'Mathara', 'Others'];
const ageOptions = ['18-24', '25-34', '35-44', '45-54', '55+'];
const sourceOptions = ['Google', 'Facebook', 'Friend', 'Advertisement', 'Other'];
const courseOptions = ['Photography Basics Workshop', 'Sculpting with Clay Workshop', 'Painting Techniques Workshop', 'Drawing & Sketching Workshop', 'Printmaking Workshop'];
const instructorOptions = ['Mr. Perera', 'Ms. Silva', 'Mr. Fernando'];
const monthOptions = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    name: '',
    gmail: '',
    city: '',
    phone: '',
    age: '',
    howknow: '',
    title: '',
    instructor: '',
    month: '',
    date: ''
  });

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(URL);
      setUsers(response.data.users || []);
    } catch (err) {
      setError("Failed to load user data");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleEditClick = (user) => {
    setEditingId(user._id || user.id);
    setEditFormData({
      name: user.name,
      gmail: user.gmail,
      city: user.city,
      phone: user.phone,
      age: user.age,
      howknow: user.howknow,
      title: user.title,
      instructor: user.instructor,
      month: user.month,
      date: user.date
    });
  };

  const handleEditFormChange = (e) => {
    const { name, value } = e.target;
    setEditFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleUpdate = async (userId) => {
    try {
      await axios.put(`${URL}/${userId}`, editFormData);
      setEditingId(null);
      fetchUsers();
    } catch (err) {
      console.error("Error updating user:", err);
      alert("Failed to update student. Please try again.");
    }
  };

  const handleDelete = async (userId) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      try {
        await axios.delete(`${URL}/${userId}`);
        fetchUsers();
      } catch (err) {
        console.error("Error deleting user:", err);
        alert("Failed to delete student. Please try again.");
      }
    }
  };

  if (isLoading) return <div className="loading">Loading users...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div>
      <Nav></Nav>
  
    <div className="page-container">
      <div className="content-wrap">
        <div className="users-container">
          <h1 className="page-title">Student Information</h1>
          
          {users.length === 0 ? (
            <div className="no-data">No students found</div>
          ) : (
            <div className="table-wrapper">
              <table className="student-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Phone</th>
                    <th>Age</th>
                    <th>Source</th>
                    <th>Course</th>
                    <th>Instructor</th>
                    <th>Month</th>
                    <th>Day</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user._id || user.id} className={editingId === (user._id || user.id) ? 'editing' : ''}>
                      {editingId === (user._id || user.id) ? (
                        <>
                          <td><input type="text" name="name" value={editFormData.name} onChange={handleEditFormChange} /></td>
                          <td><input type="email" name="gmail" value={editFormData.gmail} onChange={handleEditFormChange} /></td>
                          <td>
                            <select name="city" value={editFormData.city} onChange={handleEditFormChange}>
                              <option value="">Select City</option>
                              {cityOptions.map(city => (
                                <option key={city} value={city}>{city}</option>
                              ))}
                            </select>
                          </td>
                          <td><input type="tel" name="phone" value={editFormData.phone} onChange={handleEditFormChange} /></td>
                          <td>
                            <select name="age" value={editFormData.age} onChange={handleEditFormChange}>
                              <option value="">Select Age Group</option>
                              {ageOptions.map(age => (
                                <option key={age} value={age}>{age}</option>
                              ))}
                            </select>
                          </td>
                          <td>
                            <select name="howknow" value={editFormData.howknow} onChange={handleEditFormChange}>
                              <option value="">Select Source</option>
                              {sourceOptions.map(source => (
                                <option key={source} value={source}>{source}</option>
                              ))}
                            </select>
                          </td>
                          <td>
                            <select name="title" value={editFormData.title} onChange={handleEditFormChange}>
                              <option value="">Select Course</option>
                              {courseOptions.map(course => (
                                <option key={course} value={course}>{course}</option>
                              ))}
                            </select>
                          </td>
                          <td>
                            <select name="instructor" value={editFormData.instructor} onChange={handleEditFormChange}>
                              <option value="">Select Instructor</option>
                              {instructorOptions.map(instructor => (
                                <option key={instructor} value={instructor}>{instructor}</option>
                              ))}
                            </select>
                          </td>
                          <td>
                            <select name="month" value={editFormData.month} onChange={handleEditFormChange}>
                              <option value="">Select Month</option>
                              {monthOptions.map(month => (
                                <option key={month} value={month}>{month}</option>
                              ))}
                            </select>
                          </td>
                          <td><input type="text" name="date" value={editFormData.date} onChange={handleEditFormChange} /></td>
                          <td className="action-buttons">
                            <button className="btn save" onClick={() => handleUpdate(user._id || user.id)}>Save</button>
                            <button className="btn cancel" onClick={() => setEditingId(null)}>Cancel</button>
                          </td>
                        </>
                      ) : (
                        <>
                          <td>{user.name}</td>
                          <td>{user.gmail}</td>
                          <td>{user.city}</td>
                          <td>{user.phone}</td>
                          <td>{user.age}</td>
                          <td>{user.howknow}</td>
                          <td>{user.title}</td>
                          <td>{user.instructor}</td>
                          <td>{user.month}</td>
                          <td>{user.date}</td>
                          <td className="action-buttons">
                            <button className="btn edit" onClick={() => handleEditClick(user)}>Edit</button>
                            <button className="btn delete" onClick={() => handleDelete(user._id || user.id)}>Delete</button>
                          </td>
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      </div>
      <Footer />
    </div>
  
  );
}

export default Users; 
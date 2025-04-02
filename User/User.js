import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import axios from 'axios';

function User({ user }) { 
  const navigate = useNavigate(); 

  if (!user) {
    return <h1>No user data available</h1>; 
  }

  const { _id, name, gmail, city, phone, age, title, instructor, month, date } = user;

  const deleteHandler = async () => {
    try {
      await axios.delete(`http://localhost:5000/users/${_id}`);
      console.log("User deleted successfully");
      navigate("/users"); 
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div>
      <h1>User Display</h1>
      <h1>ID: {_id}</h1>
      <h1>Name: {name}</h1>
      <h1>Gmail: {gmail}</h1>
      <h1>City: {city}</h1>
      <h1>Phone: {phone}</h1>
      <h1>Age: {age}</h1>
      <h1>Title: {title}</h1>
      <h1>Instructor: {instructor}</h1>
      <h1>Month: {month}</h1>
      <h1>Date: {date}</h1>

      <Link to={`/users/${_id}`}>Update</Link>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
}

export default User;

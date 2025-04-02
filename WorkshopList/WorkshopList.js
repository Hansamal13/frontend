/*import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import axios from 'axios';

function WorkshopList({ workshoplist }) {
  const navigate = useNavigate();

  if (!workshoplist) {
    return <h1>No user data available</h1>;
  }

  const { _id, title, description, sessions, instructor, gmail, price, image } = workshoplist;

  const deleteHandler = async () => {
    try {
      await axios.delete(`http://localhost:5000/workshops/${_id}`);
      console.log("User deleted successfully");
      navigate("/workshops");
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div>
      <h1>Workshop Display</h1>
      <h2>ID: {_id}</h2>
      <h3>Title: {title}</h3>
      <h4>Description: {description}</h4>
      <h4>Sessions: {sessions}</h4>
      <h4>Instructor: {instructor}</h4>
      <h4>Instructor Email: {gmail}</h4>
      <h4>Price: ${price}</h4>
      {image && <img src={`http://localhost:5000/${image}`} alt={title} />}

      <Link to={`/workshops/${_id}`}>Update</Link>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
}

export default WorkshopList; */

import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import axios from 'axios';

function WorkshopList({ workshoplist }) {
  const navigate = useNavigate();

  // Ensure the workshoplist data is available
  if (!workshoplist) {
    return <h1>Loading workshop details...</h1>;
  }

  const { _id, title, description, sessions, instructor, gmail, price, image } = workshoplist;

  const deleteHandler = async () => {
    try {
      await axios.delete(`http://localhost:5000/workshops/${_id}`);
      console.log("Workshop deleted successfully");
      navigate("/workshops");
    } catch (error) {
      console.error("Error deleting workshop:", error);
    }
  };

  return (
    <div>
      <h1>Workshop Display</h1>
      <h2>ID: {_id}</h2>
      <h3>Title: {title}</h3>
      <h4>Description: {description}</h4>
      <h4>Sessions: {sessions}</h4>
      <h4>Instructor: {instructor}</h4>
      <h4>Instructor Email: {gmail}</h4>
      <h4>Price: ${price}</h4>
      {image && <img src={`http://localhost:5000/${image}`} alt={title} />}

      <Link to={`/workshops/${_id}`}>Update</Link>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
}

export default WorkshopList;


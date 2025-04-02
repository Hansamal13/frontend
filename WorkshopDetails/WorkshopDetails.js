/*import React, { useEffect, useState } from 'react'
import axios from "axios";
import WorkshopList from '../WorkshopList/WorkshopList';

const URL = "http://localhost:5000/workshops";

const fetchHandler = async () =>{
    return await axios.get(URL).then((res) => res.data);
}
function WorkshopDetails() {
    const [workshops, setWorkshopLists] = useState();
    useEffect(() => {
        fetchHandler().then((data) => setWorkshopLists(data.workshops));
    }, []);

    return (
    <div>
        <h1>Workshop Information</h1>
        <div>
            {workshops && workshops.map((workshop, i) => (
                <div key={workshop.id}>
                    <WorkshopList workshop={workshop}/>
                </div>
            ))}
        </div>
       
    </div>
  )
}

export default WorkshopDetails */



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './WorkshopDetails.css';
import Footer from '../Nav/Footer'; 
import Nav from '../Nav/Nav';


const URL = "http://localhost:5000/workshops";

function WorkshopDetails() {
  const [workshops, setWorkshops] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    title: '',
    description: '',
    sessions: '',
    instructor: '',
    gmail: '',
    price: '',
    image: null, // For handling file uploads
  });

  // Fetch workshops
  const fetchWorkshops = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(URL);
      setWorkshops(response.data.Workshops || []);
    } catch (err) {
      setError("Failed to load workshop data");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchWorkshops();
  }, []);

  // Handle edit button click
  const handleEditClick = (workshop) => {
    setEditingId(workshop._id);
    setEditFormData({
      title: workshop.title,
      description: workshop.description,
      sessions: workshop.sessions,
      instructor: workshop.instructor,
      gmail: workshop.gmail,
      price: workshop.price,
      image: null, // Keep the existing image unless changed
    });
  };

  // Handle input changes
  const handleInputChange = (e) => {
    setEditFormData({
      ...editFormData,
      [e.target.name]: e.target.value
    });
  };

  // Handle image file selection
  const handleImageChange = (e) => {
    setEditFormData({
      ...editFormData,
      image: e.target.files[0] // Store file object
    });
  };

  // Handle update
  const handleUpdate = async (workshopId) => {
    try {
      const formData = new FormData();
      formData.append('title', editFormData.title);
      formData.append('description', editFormData.description);
      formData.append('sessions', editFormData.sessions);
      formData.append('instructor', editFormData.instructor);
      formData.append('gmail', editFormData.gmail);
      formData.append('price', editFormData.price);
      if (editFormData.image) {
        formData.append('image', editFormData.image); // Append new image only if selected
      }

      await axios.put(`${URL}/${workshopId}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      setEditingId(null);
      fetchWorkshops(); // Refresh the list
    } catch (err) {
      console.error("Error updating workshop:", err);
    }
  };

  // Handle delete
  const handleDelete = async (workshopId) => {
    if (window.confirm("Are you sure you want to delete this workshop?")) {
      try {
        await axios.delete(`${URL}/${workshopId}`);
        fetchWorkshops();
      } catch (err) {
        console.error("Error deleting workshop:", err);
      }
    }
  };

  if (isLoading) return <div className="loading-message">Loading workshops...</div>;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div>
      <Nav></Nav>
      <div className="page-container">
        <div className="content-wrap">
          <div className="workshops-container">
            <h1 className="workshops-title">Workshop Information</h1>
            
            {workshops.length === 0 ? (
              <div className="no-workshops-message">No workshops found</div>
            ) : (
              <div className="table-responsive">
                <table className="workshops-table">
                  <thead>
                    <tr>
                        <th>Image</th>
                      <th>Title</th>
                      <th>Description</th>
                      <th>Sessions</th>
                      <th>Instructor</th>
                      <th>Email</th>
                      <th>Price</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {workshops.map((workshop) => (
                      <tr key={workshop._id}>
                        <td>
                          {workshop.image ? (
                            <img
                              src={`http://localhost:5000/${workshop.image}`}
                              alt={workshop.title}
                              style={{ width: '100px', height: 'auto' }}
                            />
                          ) : (
                            <span>No Image</span>
                          )}
                        </td>

                        {editingId === workshop._id ? (
                          <>
                            <td><input name="title" value={editFormData.title} onChange={handleInputChange} /></td>
                            <td><input name="description" value={editFormData.description} onChange={handleInputChange} /></td>
                            <td><input name="sessions" value={editFormData.sessions} onChange={handleInputChange} /></td>
                            <td><input name="instructor" value={editFormData.instructor} onChange={handleInputChange} /></td>
                            <td><input name="gmail" value={editFormData.gmail} onChange={handleInputChange} /></td>
                            <td><input name="price" value={editFormData.price} onChange={handleInputChange} /></td>
                            <td>
                              <input type="file" accept="image/*" onChange={handleImageChange} />
                              <button className="save-btn" onClick={() => handleUpdate(workshop._id)}>Save</button>
                              <button className="cancel-btn" onClick={() => setEditingId(null)}>Cancel</button>
                            </td>
                          </>
                        ) : (
                          <>
                            <td>{workshop.title}</td>
                            <td>{workshop.description}</td>
                            <td>{workshop.sessions}</td>
                            <td>{workshop.instructor}</td>
                            <td>{workshop.gmail}</td>
                            <td>${workshop.price}</td>
                            <td>
                              <button className="edit-btn" onClick={() => handleEditClick(workshop)}>Edit</button>
                              <button className="delete-btn" onClick={() => handleDelete(workshop._id)}>Delete</button>
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

export default WorkshopDetails; 



/*
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './WorkshopDetails.css';
import Footer from '../Nav/Footer';

const URL = "http://localhost:5000/workshops";

// Options for dropdowns
const titleOptions = ['Web Development', 'Data Science', 'UX Design', 'Digital Marketing', 'Cybersecurity'];
const sessionOptions = ['Morning (9am-12pm)', 'Afternoon (1pm-4pm)', 'Evening (5pm-8pm)', 'Full Day (9am-5pm)'];
const instructorOptions = ['John Smith', 'Sarah Johnson', 'Michael Brown', 'Emily Davis', 'David Wilson'];
const priceOptions = ['Free', '$50', '$100', '$150', '$200', '$250', '$300', 'Custom'];


function WorkshopDetails() {
  const [workshoplist, setWorkshops] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    title: '',
    description: '',
    sessions: '',
    instructor: '',
    gmail: '',
    price: '',
    image: null,
  });

  const fetchWorkshops = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(URL);
      setWorkshops(response.data.Workshops || []);
    } catch (err) {
      setError("Failed to load workshop data");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchWorkshops();
  }, []);

  const handleEditClick = (workshop) => {
    setEditingId(workshop._id);
    setEditFormData({
      title: workshop.title,
      description: workshop.description,
      sessions: workshop.sessions,
      instructor: workshop.instructor,
      gmail: workshop.gmail,
      price: workshop.price,
      image: null,
    });
  };

  const handleEditFormChange = (e) => {
    const { name, value } = e.target;
    setEditFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    setEditFormData(prev => ({
      ...prev,
      image: e.target.files[0]
    }));
  };

  const handleUpdate = async (workshopId) => {
    try {
      const formData = new FormData();
      formData.append('title', editFormData.title);
      formData.append('description', editFormData.description);
      formData.append('sessions', editFormData.sessions);
      formData.append('instructor', editFormData.instructor);
      formData.append('gmail', editFormData.gmail);
      formData.append('price', editFormData.price);
      
      if (editFormData.image) {
        formData.append('image', editFormData.image);
      }

      await axios.put(`${URL}/${workshopId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setEditingId(null);
      fetchWorkshops();
    } catch (err) {
      console.error("Error updating workshop:", err);
      alert("Failed to update workshop. Please try again.");
    }
  };

  const handleDelete = async (workshopId) => {
    if (window.confirm("Are you sure you want to delete this workshop?")) {
      try {
        await axios.delete(`${URL}/${workshopId}`);
        fetchWorkshops();
      } catch (err) {
        console.error("Error deleting workshop:", err);
        alert("Failed to delete workshop. Please try again.");
      }
    }
  };

  if (isLoading) return <div className="loading">Loading workshops...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="page-container">
      <div className="content-wrap">
        <div className="workshops-container">
          <h1 className="page-title">Workshop Information</h1>
          
          {workshoplist.length === 0 ? (
            <div className="no-data">No workshops found</div>
          ) : (
            <div className="table-wrapper">
              <table className="workshop-table">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Sessions</th>
                    <th>Instructor</th>
                    <th>Email</th>
                    <th>Price</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {workshoplist.map((workshop) => (
                    <tr key={workshop._id} className={editingId === workshop._id ? 'editing' : ''}>
                      <td>
                        {workshop.image ? (
                          <img
                            src={`http://localhost:5000/${workshop.image}`}
                            alt={workshop.title}
                            style={{ width: '100px', height: 'auto' }}
                          />
                        ) : (
                          <span>No Image</span>
                        )}
                      </td>

                      {editingId === workshop._id ? (
                        <>
                          <td>
                            <select 
                              name="title" 
                              value={editFormData.title} 
                              onChange={handleEditFormChange}
                            >
                              <option value="">Select Title</option>
                              {titleOptions.map(title => (
                                <option key={title} value={title}>{title}</option>
                              ))}
                            </select>
                          </td>
                          <td>
                            <textarea 
                              name="description" 
                              value={editFormData.description} 
                              onChange={handleEditFormChange}
                              rows="3"
                            />
                          </td>
                          <td>
                            <select 
                              name="sessions" 
                              value={editFormData.sessions} 
                              onChange={handleEditFormChange}
                            >
                              <option value="">Select Session</option>
                              {sessionOptions.map(session => (
                                <option key={session} value={session}>{session}</option>
                              ))}
                            </select>
                          </td>
                          <td>
                            <select 
                              name="instructor" 
                              value={editFormData.instructor} 
                              onChange={handleEditFormChange}
                            >
                              <option value="">Select Instructor</option>
                              {instructorOptions.map(instructor => (
                                <option key={instructor} value={instructor}>{instructor}</option>
                              ))}
                            </select>
                          </td>
                          <td>
                            <input 
                              type="email" 
                              name="gmail" 
                              value={editFormData.gmail} 
                              onChange={handleEditFormChange} 
                            />
                          </td>
                          <td>
                            <select 
                              name="price" 
                              value={editFormData.price} 
                              onChange={handleEditFormChange}
                            >
                              <option value="">Select Price</option>
                              {priceOptions.map(price => (
                                <option key={price} value={price}>{price}</option>
                              ))}
                            </select>
                          </td>
                          <td className="action-buttons">
                            <input 
                              type="file" 
                              accept="image/*" 
                              onChange={handleImageChange} 
                            />
                            <button className="btn save" onClick={() => handleUpdate(workshop._id)}>Save</button>
                            <button className="btn cancel" onClick={() => setEditingId(null)}>Cancel</button>
                          </td>
                        </>
                      ) : (
                        <>
                          <td>{workshoplist.title}</td>
                          <td>{workshop.description}</td>
                          <td>{workshop.sessions}</td>
                          <td>{workshop.instructor}</td>
                          <td>{workshop.gmail}</td>
                          <td>{workshop.price}</td>
                          <td className="action-buttons">
                            <button className="btn edit" onClick={() => handleEditClick(workshop)}>Edit</button>
                            <button className="btn delete" onClick={() => handleDelete(workshop._id)}>Delete</button>
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
      <Footer />
    </div>
  );
}

export default WorkshopDetails; */


/*

import React, { useEffect, useState } from 'react'
import axios from "axios";
import WorkshopList from '../WorkshopList/WorkshopList';

const URL = "http://localhost:5000/workshops";

const fetchHandler = async () =>{
    return await axios.get(URL).then((res) => res.data);
}
function WorkshopDetails() {
    const [workshops, SetWorkshopDetails] = useState();   
    useEffect(()=> {
        fetchHandler().then((data) => SetWorkshopDetails(data.workshops));
    },[])    
    return (
    <div>
        <h1>Student Information</h1>
        <div>
            {workshops && workshops.map((workshoplist, i) => (
                <div key={workshoplist.id}>
                    <WorkshopDetails workshoplist={workshoplist}/>
                </div>
            ))}
        </div>
       
    </div>
  )
}

export default WorkshopDetails */
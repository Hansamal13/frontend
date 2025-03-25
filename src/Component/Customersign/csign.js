import React, { useState } from 'react';
import Nav from '../Nav/Nav';
import { useNavigate , Link } from 'react-router-dom';
import axios from 'axios';
import './csign.css'; // Import the CSS file

function Csign() {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    Fname: "",
    Lname: "",
    Email_address: "",
    ContactNumber: "",
    Address: "",
    Password: "",
    ProfilePhoto: null
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {                 // value set
    const { name, value, files } = e.target;
    if (name === "ProfilePhoto") {
      setInputs((prevState) => ({
        ...prevState,
        [name]: files[0]
      }));
    } else {
      setInputs((prevState) => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate first name
    if (!inputs.Fname) {
      newErrors.Fname = "First name is required";
    } else if (/[^a-zA-Z\s]/.test(inputs.Fname)) {
      newErrors.Fname = "First name cannot contain special characters (@, #, &, *)";
    }

    // Validate last name
    if (!inputs.Lname) {
      newErrors.Lname = "Last name is required";
    } else if (/[^a-zA-Z\s]/.test(inputs.Lname)) {
      newErrors.Lname = "Last name cannot contain special characters (@, #, &, *)";
    }

    // Validate email
    if (!inputs.Email_address) newErrors.Email_address = "Email is required";

    // Validate contact number
    if (!inputs.ContactNumber) {
      newErrors.ContactNumber = "Contact number is required";
    } else if (!/^\d{10}$/.test(inputs.ContactNumber)) {
      newErrors.ContactNumber = "Contact number must be exactly 10 digits";
    }

    // Validate address
    if (!inputs.Address) newErrors.Address = "Address is required";

    // Validate password
    if (!inputs.Password) newErrors.Password = "Password is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(inputs);
      sendRequest().then(() => history('/userdetails'));
    }
  };

  const sendRequest = async () => {
    const formData = new FormData();
    formData.append('Fname', inputs.Fname);
    formData.append('Lname', inputs.Lname);
    formData.append('Email_address', inputs.Email_address);
    formData.append('ContactNumber', inputs.ContactNumber);
    formData.append('Address', inputs.Address);
    formData.append('Password', inputs.Password);
    formData.append('ProfilePhoto', inputs.ProfilePhoto);

    await axios.post("http://localhost:5000/users", formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(res => res.data);
  };

  return (
    <div className="signup-container">
      <Nav />
      <h1 className="signup-heading">Sign Up Form</h1>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="Fname"
            value={inputs.Fname}
            onChange={handleChange}
            className="form-input"
          />
          {errors.Fname && <span className="error-message">{errors.Fname}</span>}
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="Lname"
            value={inputs.Lname}
            onChange={handleChange}
            className="form-input"
          />
          {errors.Lname && <span className="error-message">{errors.Lname}</span>}
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="Email_address"
            value={inputs.Email_address}
            onChange={handleChange}
            className="form-input"
          />
          {errors.Email_address && <span className="error-message">{errors.Email_address}</span>}
        </div>
        <div className="form-group">
          <label>Contact Number</label>
          <input
            type="text"
            name="ContactNumber"
            value={inputs.ContactNumber}
            onChange={handleChange}
            maxLength="10"
            className="form-input"
          />
          {errors.ContactNumber && <span className="error-message">{errors.ContactNumber}</span>}
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            name="Address"
            value={inputs.Address}
            onChange={handleChange}
            className="form-input"
          />
          {errors.Address && <span className="error-message">{errors.Address}</span>}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password" // Use "password" type to hide the input
            name="Password"
            value={inputs.Password}
            onChange={handleChange}
            className="form-input"
          />
          {errors.Password && <span className="error-message">{errors.Password}</span>}
        </div>

        <div className="form-group">
          <label>Profile Photo</label>
          <input
            type="file"
            name="ProfilePhoto"
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <button type="submit" className="submit-button"><Link to="/userdetails">Sign Up</Link></button>
      </form>
    </div>
  );
}

export default Csign;

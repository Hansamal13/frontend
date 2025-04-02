import React, { useState } from 'react';
import Nav from '../Nav/Nav';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './Alllogin.css';

function Alllogin() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    Email_address: "",
    Password: ""
  });

  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value
    }));

    // Live validation while typing
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = "";
    
    if (name === "Email_address") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value) {
        error = "Email is required";
      } else if (!emailRegex.test(value)) {
        error = "Enter a valid email address";
      }
    }

    if (name === "Password") {
      if (!value) {
        error = "Password is required";
      } else if (value.length < 6) {
        error = "Password must be at least 6 characters";
      }
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!inputs.Email_address) {
      newErrors.Email_address = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputs.Email_address)) {
      newErrors.Email_address = "Enter a valid email address";
    }

    if (!inputs.Password) {
      newErrors.Password = "Password is required";
    } else if (inputs.Password.length < 6) {
      newErrors.Password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        console.log("Attempting login with:", inputs);

        const response = await axios.post("http://localhost:5000/users/login", {
          Email_address: inputs.Email_address,
          Password: inputs.Password
        });

        console.log("Login response:", response.data);

        if (response.data.success) {
          localStorage.setItem('user', JSON.stringify(response.data.user));
          navigate('/userdetails');
        } else {
          setLoginError(response.data.message || "Invalid email or password");
        }
      } catch (error) {
        console.error("Login error:", error);
        if (error.response) {
          console.log("Error response data:", error.response.data);
          setLoginError(error.response.data.message || "Login failed. Please try again.");
        } else {
          setLoginError("Login failed. Server may be unavailable.");
        }
      }
    }
  };

  return (
    <div className="login-container">
      <Nav />
      <br/><br/><br/><br/><br/>
      <div className="login-card">
        <h1 className="login-heading">Artist Login</h1>
        
        {loginError && <div className="login-error">{loginError}</div>}
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="Email_address"
              value={inputs.Email_address}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter your email"
            />
            {errors.Email_address && <span className="error-message">{errors.Email_address}</span>}
          </div>
          
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="Password"
              value={inputs.Password}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter your password"
            />
            {errors.Password && <span className="error-message">{errors.Password}</span>}
          </div>
          
          <button type="submit" className="login-button">Login</button>
        </form>
        
        <div className="login-footer">
          <p>Don't have an account? <Link to="/adduser" className="signup-link">Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Alllogin;

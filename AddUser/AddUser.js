/*import React, { useState } from "react";
import Nav from "../Nav/Nav";
import "./AddUser.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../Nav/Footer";

function AddUser() {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    gmail: "",
    city: "",
    phone: "",
    age: "",
    howknow: "",
    title: "",
    instructor: "",
    month: "",
    date: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting Data:", inputs);

    try {
      await sendRequest();
      console.log("Data sent successfully!");
      history("/users"); 
    } catch (error) {
      console.error("Submission Error:", error.response ? error.response.data : error.message);
    }
  };

  const sendRequest = async () => {
    return await axios.post("http://localhost:5000/users", {
      name: String(inputs.name),
      gmail: String(inputs.gmail),
      city: String(inputs.city),
      phone: inputs.phone ? Number(inputs.phone) : "",
      age: String(inputs.age),
      howknow: String(inputs.howknow), 
      title: String(inputs.title),
      instructor: String(inputs.instructor),
      month: String(inputs.month),
      date: String(inputs.date),
    });
  };

  return (
    <div>
      <Nav />
      <br></br><br></br>
      <h2>Workshop Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <h1>Student Information</h1>
        <label>Name:</label>
        <input type="text" name="name" onChange={handleChange} value={inputs.name} required />

        <label>Gmail:</label>
        <input type="email" name="gmail" onChange={handleChange} value={inputs.gmail} required />

        <label>City:</label>
        <select name="city" onChange={handleChange} value={inputs.city} required>
          <option value="">--Select City--</option>
          <option value="Colombo">Colombo</option>
          <option value="Kandy">Kandy</option>
          <option value="Galle">Galle</option>
          <option value="Kegalle">Kegalle</option>
          <option value="Rathnapura">Rathnapura</option>
          <option value="Kurunagala">Kurunagala</option>
          <option value="Anuradhapure">Anuradhapure</option>
          <option value="Polonnaruwa">Polonnaruwa</option>
          <option value="Mathara">Mathara</option>
          <option value="Jaffna">Jaffna</option>
          <option value="Ampara">Ampara</option>
          <option value="Others">Others</option>
        </select>

        <label>Phone Number:</label>
        <input
          type="tel"
          name="phone"
          onChange={handleChange}
          value={inputs.phone}
          pattern="[0-9]{10}"
          placeholder="Enter 10-digit number"
          required
        />

        <label>Age Group:</label>
        <select name="age" onChange={handleChange} value={inputs.age} required>
          <option value="">--Select Age Group--</option>
          <option value="Under 18">Under 18</option>
          <option value="18-25">18-25</option>
          <option value="26-35">26-35</option>
          <option value="36 and above">36 and above</option>
        </select>

        <label>How did you hear about the workshop?</label>
        <select name="howknow" onChange={handleChange} value={inputs.howknow} required>
          <option value="">--Select Source--</option>
          <option value="Facebook">Facebook</option>
          <option value="Instagram">Instagram</option>
          <option value="Friend">Friend</option>
          <option value="Website">Website</option>
          <option value="Others">Others</option>
        </select>

        <h1>Worshop/Course Information</h1>
        <label>Workshop Title:</label>
        <select name="title" onChange={handleChange} value={inputs.title} required>
          <option value="">--Select Workshop--</option>
          <option value="Painting Techniques Workshop">Painting Techniques Workshop</option>
          <option value="Photography Basics Workshop">Photography Basics Workshop</option>
          <option value="Sculpting with Clay Workshop">Sculpting with Clay Workshop</option>
          <option value="Drawing & Sketching Workshop">Drawing & Sketching Workshop</option>
          <option value="Printmaking Workshop">Printmaking Workshop</option>
          <option value="Calligraphy & Typography Workshop">Calligraphy & Typography Workshop</option>
          <option value="Textile & Fabric Art Workshop">Textile & Fabric Art Workshop</option>
          <option value="Digital Art & Illustration Workshop">Digital Art & Illustration Workshop</option>
          <option value="Mosaic Art Workshop">Mosaic Art Workshop</option>
          <option value="Art Installation & Conceptual Art Workshop">Art Installation & Conceptual Art Workshop</option>
        </select>

        <label>Instructor:</label>
        <select name="instructor" onChange={handleChange} value={inputs.instructor} required>
          <option value="">--Select Instructor--</option>
          <option value="Mr. Perera">Mr. Perera</option>
          <option value="Ms. Silva">Ms. Silva</option>
          <option value="Mr. Fernando">Mr. Fernando</option>
        </select>

        <label>Month:</label>
        <select name="month" onChange={handleChange} value={inputs.month} required>
          <option value="">--Select Month--</option>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>

        <label>Preferred Days:</label>
        <select name="date" onChange={handleChange} value={inputs.date} required>
          <option value="">--Select Day--</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>

        <button type="submit">Register</button>
      </form>
      <Footer></Footer>
    </div>
  );
}

export default AddUser; */

/*

import React, { useState } from "react";
import Nav from "../Nav/Nav";
import "./AddUser.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../Nav/Footer";

function AddUser() {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    gmail: "",
    city: "",
    phone: "",
    age: "",
    howknow: "",
    title: "",
    instructor: "",
    month: "",
    date: "",
  });

  const [errors, setErrors] = useState({
    name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newErrors = { ...errors };

    // Name Validation (Only Letters and Spaces)
    if (name === "name") {
      const nameRegex = /^[A-Za-z\s]+$/;
      if (!nameRegex.test(value)) {
        newErrors.name = "Name can only contain letters and spaces.";
      } else {
        newErrors.name = "";
      }
    }

    setErrors(newErrors);
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (errors.name) {
      alert("Please fix errors before submitting.");
      return;
    }

    console.log("Submitting Data:", inputs);

    try {
      await sendRequest();
      console.log("Data sent successfully!");
      history("/users"); 
    } catch (error) {
      console.error("Submission Error:", error.response ? error.response.data : error.message);
    }
  };

  const sendRequest = async () => {
    return await axios.post("http://localhost:5000/users", {
      name: String(inputs.name),
      gmail: String(inputs.gmail),
      city: String(inputs.city),
      phone: inputs.phone ? Number(inputs.phone) : "",
      age: String(inputs.age),
      howknow: String(inputs.howknow), 
      title: String(inputs.title),
      instructor: String(inputs.instructor),
      month: String(inputs.month),
      date: String(inputs.date),
    });
  };

  return (
    <div>
      <Nav />
      <br></br><br></br>
      <h2>Workshop Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <h1>Student Information</h1>
        <label>Name:</label>
        <input type="text" name="name" onChange={handleChange} value={inputs.name} required />
        {errors.name && <p className="error">{errors.name}</p>}

        <label>Gmail:</label>
        <input type="email" name="gmail" onChange={handleChange} value={inputs.gmail} required />

        <label>City:</label>
        <select name="city" onChange={handleChange} value={inputs.city} required>
          <option value="">--Select City--</option>
          <option value="Colombo">Colombo</option>
          <option value="Kandy">Kandy</option>
          <option value="Galle">Galle</option>
          <option value="Kegalle">Kegalle</option>
          <option value="Rathnapura">Rathnapura</option>
          <option value="Kurunagala">Kurunagala</option>
          <option value="Anuradhapure">Anuradhapure</option>
          <option value="Polonnaruwa">Polonnaruwa</option>
          <option value="Mathara">Mathara</option>
          <option value="Jaffna">Jaffna</option>
          <option value="Ampara">Ampara</option>
          <option value="Others">Others</option>
        </select>

        <label>Phone Number:</label>
        <input
          type="tel"
          name="phone"
          onChange={handleChange}
          value={inputs.phone}
          pattern="[0-9]{10}"
          placeholder="Enter 10-digit number"
          required
        />

        <label>Age Group:</label>
        <select name="age" onChange={handleChange} value={inputs.age} required>
          <option value="">--Select Age Group--</option>
          <option value="Under 18">Under 18</option>
          <option value="18-25">18-25</option>
          <option value="26-35">26-35</option>
          <option value="36 and above">36 and above</option>
        </select>

        <label>How did you hear about the workshop?</label>
        <select name="howknow" onChange={handleChange} value={inputs.howknow} required>
          <option value="">--Select Source--</option>
          <option value="Facebook">Facebook</option>
          <option value="Instagram">Instagram</option>
          <option value="Friend">Friend</option>
          <option value="Website">Website</option>
          <option value="Others">Others</option>
        </select>

        <h1>Worshop/Course Information</h1>
        <label>Workshop Title:</label>
        <select name="title" onChange={handleChange} value={inputs.title} required>
          <option value="">--Select Workshop--</option>
          <option value="Painting Techniques Workshop">Painting Techniques Workshop</option>
          <option value="Photography Basics Workshop">Photography Basics Workshop</option>
          <option value="Sculpting with Clay Workshop">Sculpting with Clay Workshop</option>
          <option value="Drawing & Sketching Workshop">Drawing & Sketching Workshop</option>
          <option value="Printmaking Workshop">Printmaking Workshop</option>
          <option value="Calligraphy & Typography Workshop">Calligraphy & Typography Workshop</option>
          <option value="Textile & Fabric Art Workshop">Textile & Fabric Art Workshop</option>
          <option value="Digital Art & Illustration Workshop">Digital Art & Illustration Workshop</option>
          <option value="Mosaic Art Workshop">Mosaic Art Workshop</option>
          <option value="Art Installation & Conceptual Art Workshop">Art Installation & Conceptual Art Workshop</option>
        </select>

        <label>Instructor:</label>
        <select name="instructor" onChange={handleChange} value={inputs.instructor} required>
          <option value="">--Select Instructor--</option>
          <option value="Mr. Perera">Mr. Perera</option>
          <option value="Ms. Silva">Ms. Silva</option>
          <option value="Mr. Fernando">Mr. Fernando</option>
        </select>

        <label>Month:</label>
        <select name="month" onChange={handleChange} value={inputs.month} required>
          <option value="">--Select Month--</option>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>

        <label>Preferred Days:</label>
        <select name="date" onChange={handleChange} value={inputs.date} required>
          <option value="">--Select Day--</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>

        <button type="submit">Register</button>
      </form>
      <Footer></Footer>
    </div>
  );
}

export default AddUser; */



/*
import React, { useState } from "react";
import Nav from "../Nav/Nav";
import "./AddUser.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../Nav/Footer";

function AddUser() {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    gmail: "",
    city: "",
    phone: "",
    age: "",
    howknow: "",
    title: "",
    instructor: "",
    month: "",
    date: "",
  });

  const [errors, setErrors] = useState({
    name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newErrors = { ...errors };

    if (name === "name") {
      const nameRegex = /^[A-Za-z\s]+$/;
      newErrors.name = nameRegex.test(value) ? "" : "Name can only contain letters and spaces.";
    }

    setErrors(newErrors);
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (errors.name) {
      alert("Please fix errors before submitting.");
      return;
    }

    try {
      await sendRequest();
      alert("User registered successfully!");
      history("/Home");
    } catch (error) {
      console.error("Submission Error:", error.response ? error.response.data : error.message);
      alert("Error registering user. Please try again.");
    }
  };

  const sendRequest = async () => {
    return await axios.post("http://localhost:5000/users", {
      name: String(inputs.name),
      gmail: String(inputs.gmail),
      city: String(inputs.city),
      phone: inputs.phone ? Number(inputs.phone) : "",
      age: String(inputs.age),
      howknow: String(inputs.howknow),
      title: String(inputs.title),
      instructor: String(inputs.instructor),
      month: String(inputs.month),
      date: String(inputs.date),
    });
  };

  return (
    <div>
      <Nav />
      <br /><br />
      <h2>Workshop Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <h1>Student Information</h1>
        <label>Name:</label>
        <input type="text" name="name" onChange={handleChange} value={inputs.name} required />
        {errors.name && <p className="error">{errors.name}</p>}

        <label>Gmail:</label>
        <input type="email" name="gmail" onChange={handleChange} value={inputs.gmail} required />

        <label>City:</label>
        <select name="city" onChange={handleChange} value={inputs.city} required>
          <option value="">--Select City--</option>
          <option value="Colombo">Colombo</option>
          <option value="Kandy">Kandy</option>
          <option value="Galle">Galle</option>
          <option value="Kegalle">Kegalle</option>
          <option value="Rathnapura">Rathnapura</option>
          <option value="Kurunagala">Kurunagala</option>
          <option value="Anuradhapure">Anuradhapure</option>
          <option value="Polonnaruwa">Polonnaruwa</option>
          <option value="Mathara">Mathara</option>
          <option value="Jaffna">Jaffna</option>
          <option value="Ampara">Ampara</option>
          <option value="Others">Others</option>
        </select>

        <label>Phone Number:</label>
        <input
          type="tel"
          name="phone"
          onChange={handleChange}
          value={inputs.phone}
          pattern="[0-9]{10}"
          placeholder="Enter 10-digit number"
          required
        />

        <label>Age Group:</label>
        <select name="age" onChange={handleChange} value={inputs.age} required>
          <option value="">--Select Age Group--</option>
          <option value="Under 18">Under 18</option>
          <option value="18-25">18-25</option>
          <option value="26-35">26-35</option>
          <option value="36 and above">36 and above</option>
        </select>

        <label>How did you hear about the workshop?</label>
        <select name="howknow" onChange={handleChange} value={inputs.howknow} required>
          <option value="">--Select Source--</option>
          <option value="Facebook">Facebook</option>
          <option value="Instagram">Instagram</option>
          <option value="Friend">Friend</option>
          <option value="Website">Website</option>
          <option value="Others">Others</option>
        </select>

        <h1>Workshop Information</h1>
        <label>Workshop Title:</label>
        <select name="title" onChange={handleChange} value={inputs.title} required>
          <option value="">--Select Workshop--</option>
          <option value="Painting Techniques Workshop">Painting Techniques Workshop</option>
          <option value="Photography Basics Workshop">Photography Basics Workshop</option>
          <option value="Sculpting with Clay Workshop">Sculpting with Clay Workshop</option>
          <option value="Drawing & Sketching Workshop">Drawing & Sketching Workshop</option>
          <option value="Printmaking Workshop">Printmaking Workshop</option>
          <option value="Calligraphy & Typography Workshop">Calligraphy & Typography Workshop</option>
          <option value="Textile & Fabric Art Workshop">Textile & Fabric Art Workshop</option>
          <option value="Digital Art & Illustration Workshop">Digital Art & Illustration Workshop</option>
          <option value="Mosaic Art Workshop">Mosaic Art Workshop</option>
          <option value="Art Installation & Conceptual Art Workshop">Art Installation & Conceptual Art Workshop</option>
        </select>

        <label>Instructor:</label>
        <select name="instructor" onChange={handleChange} value={inputs.instructor} required>
          <option value="">--Select Instructor--</option>
          <option value="Mr. Perera">Mr. Perera</option>
          <option value="Ms. Silva">Ms. Silva</option>
          <option value="Mr. Fernando">Mr. Fernando</option>
        </select>

        <label>Month:</label>
        <select name="month" onChange={handleChange} value={inputs.month} required>
          <option value="">--Select Month--</option>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>

        <label>Preferred Days:</label>
        <select name="date" onChange={handleChange} value={inputs.date} required>
          <option value="">--Select Day--</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>

        <button type="submit">Register</button>
      </form>
      <Footer />
    </div>
  );
}

export default AddUser; */


import React, { useState } from "react";
import Nav from "../Nav/Nav";
import "./AddUser.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../Nav/Footer";

function AddUser() {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    gmail: "",
    city: "",
    phone: "",
    age: "",
    howknow: "",
    title: "",
    instructor: "",
    month: "",
    date: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newErrors = { ...errors };

    if (name === "name") {
      const nameRegex = /^[A-Za-z\s]+$/;
      newErrors.name = nameRegex.test(value) ? "" : "Name can only contain letters and spaces.";
    }

    if (name === "phone") {
      const phoneRegex = /^[0-9]{0,10}$/;
      newErrors.phone = phoneRegex.test(value) ? "" : "Phone number must be exactly 10 digits.";
    }

    setErrors(newErrors);
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (errors.name || errors.phone) {
      alert("Please fix errors before submitting.");
      return;
    }

    try {
      await sendRequest();
      alert("User registered successfully!");
      history("/Home");
    } catch (error) {
      console.error("Submission Error:", error.response ? error.response.data : error.message);
      alert("Error registering user. Please try again.");
    }
  };

  const sendRequest = async () => {
    return await axios.post("http://localhost:5000/users", {
      name: String(inputs.name),
      gmail: String(inputs.gmail),
      city: String(inputs.city),
      phone: inputs.phone ? Number(inputs.phone) : "",
      age: String(inputs.age),
      howknow: String(inputs.howknow),
      title: String(inputs.title),
      instructor: String(inputs.instructor),
      month: String(inputs.month),
      date: String(inputs.date),
    });
  };

  return (
    <div>
      <Nav />
      <br /><br />
      <h2>Workshop Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <h1>Student Information</h1>
        <label>Name:</label>
        <input type="text" name="name" onChange={handleChange} value={inputs.name} required />
        {errors.name && <p className="error">{errors.name}</p>}

        <label>Gmail:</label>
        <input type="email" name="gmail" onChange={handleChange} value={inputs.gmail} required />

        <label>City:</label>
        <select name="city" onChange={handleChange} value={inputs.city} required>
          <option value="">--Select City--</option>
          <option value="Colombo">Colombo</option>
          <option value="Kandy">Kandy</option>
          <option value="Galle">Galle</option>
          <option value="Kegalle">Kegalle</option>
          <option value="Rathnapura">Rathnapura</option>
          <option value="Kurunagala">Kurunagala</option>
          <option value="Anuradhapure">Anuradhapure</option>
          <option value="Polonnaruwa">Polonnaruwa</option>
          <option value="Mathara">Mathara</option>
          <option value="Jaffna">Jaffna</option>
          <option value="Ampara">Ampara</option>
          <option value="Others">Others</option>
        </select>

        <label>Phone Number:</label>
        <input
          type="tel"
          name="phone"
          onChange={handleChange}
          value={inputs.phone}
          placeholder="Enter 10-digit number"
          required
        />
        {errors.phone && <p className="error">{errors.phone}</p>}

        <label>Age Group:</label>
        <select name="age" onChange={handleChange} value={inputs.age} required>
          <option value="">--Select Age Group--</option>
          <option value="Under 18">Under 18</option>
          <option value="18-25">18-25</option>
          <option value="26-35">26-35</option>
          <option value="36 and above">36 and above</option>
        </select>

        <label>How did you hear about the workshop?</label>
        <select name="howknow" onChange={handleChange} value={inputs.howknow} required>
          <option value="">--Select Source--</option>
          <option value="Facebook">Facebook</option>
          <option value="Instagram">Instagram</option>
          <option value="Friend">Friend</option>
          <option value="Website">Website</option>
          <option value="Others">Others</option>
        </select>

        <h1>Workshop Information</h1>
        <label>Workshop Title:</label>
        <select name="title" onChange={handleChange} value={inputs.title} required>
          <option value="">--Select Workshop--</option>
          <option value="Painting Techniques Workshop">Painting Techniques Workshop</option>
          <option value="Photography Basics Workshop">Photography Basics Workshop</option>
          <option value="Sculpting with Clay Workshop">Sculpting with Clay Workshop</option>
          <option value="Drawing & Sketching Workshop">Drawing & Sketching Workshop</option>
          <option value="Printmaking Workshop">Printmaking Workshop</option>
          <option value="Calligraphy & Typography Workshop">Calligraphy & Typography Workshop</option>
          <option value="Textile & Fabric Art Workshop">Textile & Fabric Art Workshop</option>
          <option value="Digital Art & Illustration Workshop">Digital Art & Illustration Workshop</option>
          <option value="Mosaic Art Workshop">Mosaic Art Workshop</option>
          <option value="Art Installation & Conceptual Art Workshop">Art Installation & Conceptual Art Workshop</option>
        </select>

        <label>Instructor:</label>
        <select name="instructor" onChange={handleChange} value={inputs.instructor} required>
          <option value="">--Select Instructor--</option>
          <option value="Mr. Perera">Mr. Perera</option>
          <option value="Ms. Silva">Ms. Silva</option>
          <option value="Mr. Fernando">Mr. Fernando</option>
        </select>

        <label>Month:</label>
        <select name="month" onChange={handleChange} value={inputs.month} required>
          <option value="">--Select Month--</option>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>

        <label>Preferred Days:</label>
        <select name="date" onChange={handleChange} value={inputs.date} required>
          <option value="">--Select Day--</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>

        <button type="submit">Register</button>
      </form>
      <Footer />
    </div>
  );
}

export default AddUser;








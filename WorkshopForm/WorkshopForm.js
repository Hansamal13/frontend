import React, { useState } from "react";
import Nav from "../Nav/Nav";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../Nav/Footer";

function WorkshopForm() {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    sessions: "",
    instructor: "",
    gmail: "",
    price: "",
    image: "",
  });

  const [errors, setErrors] = useState({
    instructor: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newErrors = { ...errors };

    // Validation for Instructor Name (Only Letters)
    if (name === "instructor") {
      const instructorRegex = /^[A-Za-z\s]+$/;
      newErrors.instructor = instructorRegex.test(value) ? "" : "Instructor name can only contain letters.";
    }

    // Validation for Price (Only Positive Numbers)
    if (name === "price") {
      newErrors.price = value < 0 || isNaN(value) ? "Price must be a positive number." : "";
    }

    setErrors(newErrors);
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for errors before submission
    if (errors.instructor || errors.price) {
      alert("Please fix errors before submitting.");
      return;
    }

    console.log("Submitting Data:", inputs);

    try {
      await sendRequest();
      alert("Workshop added successfully!"); // Success message
      history("/Home");
    } catch (error) {
      console.error("Submission Error:", error.response ? error.response.data : error.message);
    }
  };

  const sendRequest = async () => {
    return await axios.post("http://localhost:5000/workshops", {
      title: String(inputs.title),
      description: String(inputs.description),
      sessions: String(inputs.sessions),
      instructor: String(inputs.instructor),
      gmail: String(inputs.gmail),
      price: Number(inputs.price),
      image: String(inputs.image),
    });
  };

  return (
    <div>
      <Nav />
      <br /><br />
      <h2>Add Workshop</h2>

      <form onSubmit={handleSubmit}>
        <h1>Student Information</h1>

        <label>Title:</label>
        <select name="title" onChange={handleChange} value={inputs.title} required>
          <option value="">--Select Title--</option>
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

        <label>Description:</label>
        <input type="text" name="description" onChange={handleChange} value={inputs.description} required />

        <label>Sessions:</label>
        <input type="text" name="sessions" onChange={handleChange} value={inputs.sessions} required />
      
        <label>Instructor name:</label>
        <input type="text" name="instructor" onChange={handleChange} value={inputs.instructor} required />
        {errors.instructor && <p className="error">{errors.instructor}</p>}

        <label>Gmail:</label>
        <input type="email" name="gmail" onChange={handleChange} value={inputs.gmail} required />

        <label>Price:</label>
        <input type="number" name="price" onChange={handleChange} value={inputs.price} required />
        {errors.price && <p className="error">{errors.price}</p>}

        <label>Image:</label>
        <input type="file" name="image" onChange={handleChange} value={inputs.image} required /> 

        <button type="submit">Add</button>
      </form>
      <Footer />
    </div>
  );
}

export default WorkshopForm;


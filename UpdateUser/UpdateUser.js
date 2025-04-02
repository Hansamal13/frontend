import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router';

function UpdateUser() {
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
        date: ""
    });
    const history = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const fetchHandler = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/users/${id}`);
                setInputs(response.data.user || {});
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
        fetchHandler();
    }, [id]);

    const sendRequest = async () => {
        try {
            await axios.put(`http://localhost:5000/users/${id}`, inputs);
            console.log("Data sent successfully!");
            history("/users");
        } catch (error) {
            console.error("Submission Error:", error.response ? error.response.data : error.message);
        }
    };

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting Data:", inputs);
        sendRequest();
    };

    return (
        <div>
            <h1>Update User</h1>
            <form onSubmit={handleSubmit}>
                <h1>Student Information</h1>
                <label>Name:</label>
                <input type="text" name="name" onChange={handleChange} value={inputs.name || ""} required />

                <label>Gmail:</label>
                <input type="email" name="gmail" onChange={handleChange} value={inputs.gmail || ""} required />

                <label>City:</label>
                <select name="city" onChange={handleChange} value={inputs.city || ""} required>
                    <option value="">--Select City--</option>
                    <option value="Colombo">Colombo</option>
                    <option value="Kandy">Kandy</option>
                    <option value="Galle">Galle</option>
                </select>

                <label>Phone Number:</label>
                <input type="tel" name="phone" onChange={handleChange} value={inputs.phone || ""} pattern="[0-9]{10}" placeholder="Enter 10-digit number" required />

                <label>Age Group:</label>
                <select name="age" onChange={handleChange} value={inputs.age || ""} required>
                    <option value="">--Select Age Group--</option>
                    <option value="Under 18">Under 18</option>
                    <option value="18-25">18-25</option>
                    <option value="26-35">26-35</option>
                    <option value="36 and above">36 and above</option>
                </select>

                <label>How did you hear about the workshop?</label>
                <select name="howknow" onChange={handleChange} value={inputs.howknow || ""} required>
                    <option value="">--Select Source--</option>
                    <option value="Facebook">Facebook</option>
                    <option value="Instagram">Instagram</option>
                    <option value="Friend">Friend</option>
                    <option value="Website">Website</option>
                </select>

                <h1>Workshop/Course Information</h1>
                <label>Workshop Title:</label>
                <select name="title" onChange={handleChange} value={inputs.title || ""} required>
                    <option value="">--Select Workshop--</option>
                    <option value="Photography">Photography</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Graphic Design">Graphic Design</option>
                </select>

                <label>Instructor:</label>
                <select name="instructor" onChange={handleChange} value={inputs.instructor || ""} required>
                    <option value="">--Select Instructor--</option>
                    <option value="Mr. Perera">Mr. Perera</option>
                    <option value="Ms. Silva">Ms. Silva</option>
                    <option value="Mr. Fernando">Mr. Fernando</option>
                </select>

                <label>Month:</label>
                <select name="month" onChange={handleChange} value={inputs.month || ""} required>
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
                <select name="date" onChange={handleChange} value={inputs.date || ""} required>
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
        </div>
    );
}

export default UpdateUser;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router';

function UpdateWorkshop() {
    const [inputs, setInputs] = useState({
        title: "",
        description: "",
        sessions: "",
        instructor: "",
        gmail: "",
        price: "",
        image: ""
    });
    const history = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const fetchHandler = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/workshops/${id}`);
                setInputs(response.data.workshop || {});
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
        fetchHandler();
    }, [id]);

    const sendRequest = async () => {
        try {
            await axios.put(`http://localhost:5000/workshops/${id}`, inputs);
            console.log("Data sent successfully!");
            history("/workshops");
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
            <h1>Update Workshop</h1>
            <form onSubmit={handleSubmit}>
                <h1>Workshop Information</h1>
                <label>Title:</label>
                <input type="text" name="title" onChange={handleChange} value={inputs.title || ""} required />

                <label>Description:</label>
                <input type="text" name="description" onChange={handleChange} value={inputs.description || ""} required />

                <label>Sessions:</label>
                <input type="number" name="sessions" onChange={handleChange} value={inputs.sessions || ""} required />

                <label>Instructor:</label>
                <input type="text" name="instructor" onChange={handleChange} value={inputs.instructor || ""} required />

                <label>Gmail:</label>
                <input type="email" name="gmail" onChange={handleChange} value={inputs.gmail || ""} required />

                <label>Price:</label>
                <input type="number" name="price" onChange={handleChange} value={inputs.price || ""} required />

                <label>Image:</label>
                <input type="text" name="image" onChange={handleChange} value={inputs.image || ""} required />

               <button type="submit">Update</button>

    
            </form>
        </div>
    );
}

export default UpdateWorkshop;

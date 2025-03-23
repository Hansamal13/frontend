import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router';
import { useNavigate } from 'react-router';



function UpdateUser() {

    const [inputs,setInputs] = useState({});
    const history = useNavigate();
    const id = useParams().id;

    useEffect(()=>{
        const fetchHandler = async ()=>{
            await axios
            .get(`http://localhost:5000/users/${id}`)
            .then((res)=> res.data)
            .then((data)=> setInputs(data.user));
            };
            fetchHandler();
     },[id]);

        const sendRequest = async ()=>{
        await axios
        .put(`http://localhost:5000/users/${id}`,{
            Fname: String(inputs.Fname),
             Lname: String(inputs.Lname),
             Email_address: String(inputs.Email_address),
            password: String(inputs.password),
        })

        .then((res) => res.data);
    };

    const handleChange =(e) => {
        setInputs((prevState) => ({
          ...prevState,
          [e.target.name]:e.target.value,
        }));
      };
    
    
      const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(inputs);
        sendRequest().then(()=>history('/userdetails'))
      };


  return (
    <div>
      <h1>Update User</h1>

      <form onSubmit={handleSubmit}>
        <lable>Name : </lable>
        <br/>
        <input type="text" name="Fname" onChange={handleChange} value={inputs.Fname}  required></input>
        <br/><br/>

        <lable>LName : </lable>
        <br/>
        <input type="text" name="Lname" onChange={handleChange} value={inputs.Lname}  required></input>
        <br/><br/>

        <lable>Email : </lable>
        <br/>
        <input type="text" name="Email_address" onChange={handleChange}  value={inputs.Email_address}  required></input>
        <br/><br/>

        <lable>Password : </lable>
        <br/>
        <input type="text" name="password"  onChange={handleChange}  value={inputs.password}  required></input>
        <br/><br/>
        <button>Submit</button>
      </form>




    </div>
  )
}

export default UpdateUser

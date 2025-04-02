import React from 'react'
import Nav from "../Nav/Nav";
import './Workshop.css';
import {Link} from "react-router-dom";
import Footer from '../Nav/Footer';

function Worshop() {
  return (
    <div>
        <Nav></Nav>
        
        <section class="header">
            <div class="content">
                <h1>How to Register</h1><br></br>
                <p>Welcome to the registration page! Below are two methods to register for our workshops or events. Choose the method that suits you best—online or offline—and follow the instructions.</p><br></br>
            </div>
            <br></br>
            <div class="image">
                <img src="https://img.freepik.com/free-photo/sight-sense-plants-collage_23-2149848106.jpg?uid=R189755632&ga=GA1.1.1151180398.1740583620&semt=ais_hybrid" alt="Registration Image"/>
            </div>
        </section>

        <section class="method online">
            <h2>Registering Online</h2>
            <p>To register online, simply fill out the registration form on our website. This process is quick and easy. Just provide your personal details, workshop preferences, and submit your registration to receive a confirmation email.</p>
            <Link to="/adduser" className="active home-a">
            <button class="btn">Go to Registration Form</button>
            </Link>
        </section>
                
        <section class="method offline">
            <h2>Registering Offline</h2>
            <p>If you prefer to register offline, you can download the registration PDF form. Fill it out manually, then upload the completed form via email to our provided address.</p>
            <Link to="/pdf" className="active home-a">
            <button class="btn">How to Download Registration Form</button>
            </Link>
        </section>

        <Footer></Footer>

    </div>

    
  )
}

export default Worshop 


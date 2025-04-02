import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Nav from "../Nav/Nav";
import './PDF.css'; // Import the CSS file
import Footer from '../Nav/Footer';

function PDF() {
    const formRef = useRef(); // Reference to the form container

    // Function to generate and download PDF
    const handleDownloadPDF = () => {
        const input = formRef.current;

        html2canvas(input, { scale: 2 }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');

            const imgWidth = 190; // Adjusted width for A4 size
            const imgHeight = (canvas.height * imgWidth) / canvas.width; // Maintain aspect ratio

            pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
            pdf.save('Workshop_Registration_Form.pdf'); // File name
        });
    };

    return (
        <div>
            <Nav /> 
            <div className="form-containerw" ref={formRef}>
            <form>
                <h2>Workshop Registration Form</h2>
                    <label htmlFor="name">Full Name:</label>
                    <input type="text" id="name" name="name" />

                    <label htmlFor="gmail">Email (Gmail):</label>
                    <input type="email" id="gmail" name="gmail"/>

                    <label htmlFor="city">City:</label>
                    <input type="text" id="city" name="city" />

                    <label htmlFor="phone">Phone Number:</label>
                    <input type="tel" id="phone" name="phone" />

                    <label htmlFor="age-group">Age Group:</label>
                    <input type="text" id="age_group" name="age-group"/>

                    <label htmlFor="workshop-title">Workshop Title:</label>
                    <input type="text" id="workshop-title" name="workshop-title"/>

                    <label htmlFor="month">Month:</label>
                    <input type="text" id="month" name="month" />

                    <label htmlFor="day">Day:</label>
                    <input type="text" id="day" name="day"/>
                </form>
            </div>
            
            <button className="download-btn" onClick={handleDownloadPDF}>Download Registration Form as PDF</button>
            <Footer></Footer>
        </div>
    );
}

export default PDF;

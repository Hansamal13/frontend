import React from 'react'
import Nav from "../Nav/Nav";
import './Catalog1.css';
import Footer from '../Nav/Footer';

function Catelog1() {
  return (
    <div>
     <Nav></Nav>
     <br></br>
     <br></br>
    <div class="container">
        <div class="image-container">
            <img src="https://img.freepik.com/free-photo/high-angle-hand-holding-painting-brush_23-2148263425.jpg?t=st=1742451914~exp=1742455514~hmac=7d97999e7384e3480620e455917f6889333712b9a2f88ffa53fa62c4f47780eb&w=1380" alt="Human Head by Rick Weaver"/>
        </div>
        <div class="details">
            <h3>Painting Techniques Workshop</h3>
            <p>The Painting Techniques Workshop is designed to guide participants through a rich journey of artistic exploration. This session dives deep into various painting styles and mediums, including watercolor, acrylic, and oil painting. Participants will first get introduced to the materials, tools, and surface preparations specific to each medium. The workshop will cover key techniques such as color mixing, layering, glazing, dry brushing, and impasto, allowing attendees to experiment with texture and depth. Special focus will be placed on developing control over different brushes and learning how to create smooth gradients, sharp lines, and subtle details.<br></br> <br></br> Throughout the workshop, participants will have hands-on opportunities to work on small practice pieces and a final artwork of their choice. Instructors will offer personalized feedback, helping each individual refine their style and overcome challenges. Whether you're a complete beginner curious about painting, or an experienced artist wanting to strengthen your technical skills, this workshop encourages creativity, confidence, and artistic growth.</p>
            <div class="course-info">
                <div>
                    <h4>Tuition</h4>
                    <p>$220</p>
                </div>
                <div>
                    <h4>Sessions</h4>
                    <p>5</p>
                </div>
            </div>
        </div>
    </div>
    <Footer></Footer>
      
    </div>
  )
}

export default Catelog1

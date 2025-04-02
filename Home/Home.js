/*
import React from 'react'
import Nav from "../Nav/Nav";
import './Home.css';
import {Link} from "react-router-dom";
import Footer from '../Nav/Footer';

function Home() {
  return (
    <div>
      <Nav></Nav>
      <br></br>
  <section class="description">
      <h2>About the Workshops</h2>
      <p>Welcome to our exciting workshop catalog! At ARTSPHERE, we believe that art is not just to be admired, but experienced. Our workshops are designed to inspire creativity, develop new skills, and connect people through the power of art.<br></br> Whether you're a beginner exploring a new hobby or an experienced artist looking to refine your techniques, we offer a variety of workshops tailored to all skill levels. From painting and sculpture to photography and digital art, our experienced instructors will guide you step-by-step in a friendly, supportive environment. <br></br>Join us, unleash your creativity, and become part of a vibrant artistic community. Browse our workshop catalog below and register today to begin your artistic journey</p>
      <br></br>
      <p>Registration for all workshops is ongoing. Call us at 071-111-1111 for details. Read more about how to register here.</p>
  </section>
  <section class="button">
  <Link to="/workshop" className="active home-a">
  <button>How To Register</button>
    </Link>
  
  </section>
  
  <section class="available">
  <h2>Available Workshops</h2>
  </section>

  <section class="catalog">
  
      <div class="workshop">
          <img src="https://img.freepik.com/free-photo/high-angle-hand-holding-painting-brush_23-2148263425.jpg?t=st=1742451914~exp=1742455514~hmac=7d97999e7384e3480620e455917f6889333712b9a2f88ffa53fa62c4f47780eb&w=1380" alt="Painting Techniques" class="workshop-image"/>
          <h3>Painting Techniques Workshop</h3>
          <p>Learn watercolor, acrylic, and oil painting techniques to create beautiful artworks.</p>
          <button class="butn"><Link to="/catalog1">View</Link></button>

      </div>

      <div class="workshop">
          <img src="https://img.freepik.com/free-photo/people-looking-together-camera_23-2148532475.jpg?uid=R189755632&ga=GA1.1.1151180398.1740583620&semt=ais_hybrid" alt="Photography Basics" class="workshop-image"/>
          <h3>Photography Basics</h3>
          <p>Discover how to use a camera, compose shots, and edit photos like a pro.</p>

          <button class="butn">View</button>
      </div>

      <div class="workshop">
          <img src="https://img.freepik.com/free-photo/close-up-hands-making-leaf_23-2148878437.jpg?uid=R189755632&ga=GA1.1.1151180398.1740583620&semt=ais_hybrid" alt="Sculpting with Clay" class="workshop-image"/>
          <h3>Sculpting with Clay</h3>
          <p>Master clay modeling and shaping to craft unique sculptures and pottery.</p>
          <button class="butn">View</button>
      </div>

      <div class="workshop">
          <img src="https://img.freepik.com/free-photo/close-up-hand-drawing-paper_23-2148577733.jpg?uid=R189755632&ga=GA1.1.1151180398.1740583620&semt=ais_hybrid" alt="Sculpting with Clay" class="workshop-image"/>
          <h3>Drawing & Sketching Workshop</h3>
          <p>Practice pencil sketching, shading, and perspective to improve your drawing skills.</p>
          <button class="butn">View</button>
      </div>

      <div class="workshop">
          <img src="https://img.freepik.com/free-photo/hands-working-network-graphic-overlay-banner-desk_53876-101278.jpg?uid=R189755632&ga=GA1.1.1151180398.1740583620&semt=ais_hybrid" alt="Sculpting with Clay" class="workshop-image"/>
          <h3>Printmaking Workshop</h3>
          <p>Explore block printing, screen printing, and etching to create bold prints.</p>
          <button class="butn">View</button>
      </div>

      <div class="workshop">
          <img src="https://img.freepik.com/free-photo/portrait-young-woman-hands-writing-alphabet-paper-desk-isolated_574295-5234.jpg?uid=R189755632&ga=GA1.1.1151180398.1740583620&semt=ais_hybrid" alt="Sculpting with Clay" class="workshop-image"/>
          <h3>Calligraphy & Typography Workshop</h3>
          <p>Learn modern calligraphy and lettering styles to design artistic text.</p>
          <button class="butn">View</button>
      </div>

      <div class="workshop">
          <img src="https://img.freepik.com/free-photo/young-adult-reusing-fabric-material_23-2149400632.jpg?uid=R189755632&ga=GA1.1.1151180398.1740583620&semt=ais_hybrid" alt="Sculpting with Clay" class="workshop-image"/>
          <h3>Textile & Fabric Art Workshop</h3>
          <p>Experiment with fabric painting, embroidery, and weaving to make textile art.</p>
          <button class="butn">View</button>
      </div>

      <div class="workshop">
          <img src="https://img.freepik.com/free-photo/high-angle-illustrator-drawing-ipad_23-2150172074.jpg?t=st=1742452879~exp=1742456479~hmac=8d03db918dd130dab01781fc3b4aa68c49683a89bfcaf446cea7b8fe4c189843&w=996" alt="Sculpting with Clay" class="workshop-image"/>
          <h3>Digital Art & Illustration Workshop</h3>
          <p>Use digital tools and tablets to create stunning digital illustrations.</p>
          <button class="butn">View</button>
      </div>

      <div class="workshop">
          <img src="https://img.freepik.com/free-photo/mosaic-puzzle-art-kids-children-s-creative-game-hands-are-playing-mosaic-table-colorful-multi-colored-details-close-up_155003-20530.jpg?uid=R189755632&ga=GA1.1.1151180398.1740583620&semt=ais_hybrid" alt="Sculpting with Clay" class="workshop-image"/>
          <h3>Mosaic Art Workshop</h3>
          <p>Design colorful mosaics using tiles, glass, and grout.</p>
          <button class="butn">View</button>
      </div>

      <div class="workshop">
          <img src="https://img.freepik.com/free-photo/young-woman-painting-while-sitting_171337-16402.jpg?uid=R189755632&ga=GA1.1.1151180398.1740583620&semt=ais_hybrid" alt="Sculpting with Clay" class="workshop-image"/>
          <h3>Art Installation & Conceptual Art Workshop</h3>
          <p>Create large-scale art installations and explore conceptual art ideas.</p>
          <button class="butn">View</button>
      </div>
  </section>
  <br></br>
  <br></br>
  <br></br>
  <Footer />
    </div>
  )
}

export default Home */


import React, { useState } from 'react'
import Nav from "../Nav/Nav";
import './Home.css';
import {Link} from "react-router-dom";
import Footer from '../Nav/Footer';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  // Workshop data (extracted from the original component)
  const workshops = [
    {
      title: "Painting Techniques Workshop",
      description: "Learn watercolor, acrylic, and oil painting techniques to create beautiful artworks.",
      image: "https://img.freepik.com/free-photo/high-angle-hand-holding-painting-brush_23-2148263425.jpg?t=st=1742451914~exp=1742455514~hmac=7d97999e7384e3480620e455917f6889333712b9a2f88ffa53fa62c4f47780eb&w=1380",
      link: "/catalog1"
    },
    {
      title: "Photography Basics",
      description: "Discover how to use a camera, compose shots, and edit photos like a pro.",
      image: "https://img.freepik.com/free-photo/people-looking-together-camera_23-2148532475.jpg?uid=R189755632&ga=GA1.1.1151180398.1740583620&semt=ais_hybrid",
      link: "/photography"
    },
    {
      title: "Sculpting with Clay",
      description: "Master clay modeling and shaping to craft unique sculptures and pottery.",
      image: "https://img.freepik.com/free-photo/close-up-hands-making-leaf_23-2148878437.jpg?uid=R189755632&ga=GA1.1.1151180398.1740583620&semt=ais_hybrid",
      link: "/sculpting"
    },
    {
      title: "Drawing & Sketching Workshop",
      description: "Practice pencil sketching, shading, and perspective to improve your drawing skills.",
      image: "https://img.freepik.com/free-photo/close-up-hand-drawing-paper_23-2148577733.jpg?uid=R189755632&ga=GA1.1.1151180398.1740583620&semt=ais_hybrid",
      link: "/drawing"
    },
    {
      title: "Printmaking Workshop",
      description: "Explore block printing, screen printing, and etching to create bold prints.",
      image: "https://img.freepik.com/free-photo/hands-working-network-graphic-overlay-banner-desk_53876-101278.jpg?uid=R189755632&ga=GA1.1.1151180398.1740583620&semt=ais_hybrid",
      link: "/printmaking"
    },
    {
      title: "Calligraphy & Typography Workshop",
      description: "Learn modern calligraphy and lettering styles to design artistic text.",
      image: "https://img.freepik.com/free-photo/portrait-young-woman-hands-writing-alphabet-paper-desk-isolated_574295-5234.jpg?uid=R189755632&ga=GA1.1.1151180398.1740583620&semt=ais_hybrid",
      link: "/calligraphy"
    },
    {
      title: "Textile & Fabric Art Workshop",
      description: "Experiment with fabric painting, embroidery, and weaving to make textile art.",
      image: "https://img.freepik.com/free-photo/young-adult-reusing-fabric-material_23-2149400632.jpg?uid=R189755632&ga=GA1.1.1151180398.1740583620&semt=ais_hybrid",
      link: "/textile"
    },
    {
      title: "Digital Art & Illustration Workshop",
      description: "Use digital tools and tablets to create stunning digital illustrations.",
      image: "https://img.freepik.com/free-photo/high-angle-illustrator-drawing-ipad_23-2150172074.jpg?t=st=1742452879~exp=1742456479~hmac=8d03db918dd130dab01781fc3b4aa68c49683a89bfcaf446cea7b8fe4c189843&w=996",
      link: "/digital-art"
    },
    {
      title: "Mosaic Art Workshop",
      description: "Design colorful mosaics using tiles, glass, and grout.",
      image: "https://img.freepik.com/free-photo/mosaic-puzzle-art-kids-children-s-creative-game-hands-are-playing-mosaic-table-colorful-multi-colored-details-close-up_155003-20530.jpg?uid=R189755632&ga=GA1.1.1151180398.1740583620&semt=ais_hybrid",
      link: "/mosaic"
    },
    {
      title: "Art Installation & Conceptual Art Workshop",
      description: "Create large-scale art installations and explore conceptual art ideas.",
      image: "https://img.freepik.com/free-photo/young-woman-painting-while-sitting_171337-16402.jpg?uid=R189755632&ga=GA1.1.1151180398.1740583620&semt=ais_hybrid",
      link: "/installation"
    }
  ];

  // Filter workshops based on search term
  const filteredWorkshops = workshops.filter(workshop => 
    workshop.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    workshop.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-container">
      <Nav />
      <br></br>
      <section className="description">
        <h2>About the Workshops</h2>
        <p>Welcome to our exciting workshop catalog! At ARTSPHERE, we believe that art is not just to be admired, but experienced. Our workshops are designed to inspire creativity, develop new skills, and connect people through the power of art.</p>
        <p>Whether you're a beginner exploring a new hobby or an experienced artist looking to refine your techniques, we offer a variety of workshops tailored to all skill levels. From painting and sculpture to photography and digital art, our experienced instructors will guide you step-by-step in a friendly, supportive environment.</p>
        <p>Join us, unleash your creativity, and become part of a vibrant artistic community. Browse our workshop catalog below and register today to begin your artistic journey</p>
        
        <div className="registration-info">
          <p>Registration for all workshops is ongoing. Call us at 071-111-1111 for details.</p>
          <Link to="/workshop" className="registration-link">Learn How to Register</Link>
        </div>
      </section>

      <section className="workshop-search">
        <h2>Available Workshops</h2>
        <div className="search-container">
          <input 
            type="text" 
            className="search-input"
            placeholder="Search workshops by name or description..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </section>

      <section className="workshop-catalog">
        {filteredWorkshops.length > 0 ? (
          filteredWorkshops.map((workshop, index) => (
            <div key={index} className="workshop-card">
              <img 
                src={workshop.image} 
                alt={workshop.title} 
                className="workshop-image"
              />
              <div className="workshop-content">
                <h3>{workshop.title}</h3>
                <p>{workshop.description}</p>
                <Link to={workshop.link} className="workshop-view-btn">View Workshop</Link>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <p>No workshops found matching your search.</p>
          </div>
        )}
      </section>
      <br></br>
      <br></br>
      <Footer />
    
    </div>
  )
}

export default Home
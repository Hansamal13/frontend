import Nav from "../Nav/Nav";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const slides = [
  {
    title: "Discover Art Worldwide",
    description: "Explore a curated collection of unique artworks from global artists",
    image: "https://i.pinimg.com/736x/c5/34/03/c5340348c8022b98f60587a8f0bf38da.jpg"
},
 
  {
    title: "Affordable Art for Everyone",
    description: "High-quality art pieces at accessible prices",
    image: "https://i.pinimg.com/736x/04/f3/f2/04f3f2644ec3b197e9a7ca80335e5b3e.jpg"
}
];

const Home = () => {
  const [artworks, setArtworks] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [sortOption, setSortOption] = useState("name");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetchArtworks();
    
    // Slideshow auto-scroll
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval);
  }, []);

  const fetchArtworks = async () => {
    try {
      const response = await axios.get('/api/artworks');
      setArtworks(response.data);
    } catch (error) {
      console.error('Error fetching artworks:', error);
    }
  };

  return (
    <div>
      <Nav />
      
      {/* Slideshow Section */}
      <div className="home-slideshow">
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${slide.image})`,
              zIndex: index === currentSlide ? 10 : 1
            }}
          >
            <div className="slide-content">
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
              <button onClick={() => navigate('/mainart')}>Explore Art</button>
            </div>
          </div>
        ))}
      </div>

      {/* Rest of the component remains the same */}
      <div className="art-home-container">
        {/* You can add more content here */}
      </div>
    </div>
  );
};

export default Home;
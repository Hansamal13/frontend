import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const slides = [
  {
    title: "Discover Art Worldwide",
    description: "Explore a curated collection of unique artworks from global artists",
    image: "https://img.freepik.com/premium-photo/3d-character-bird-made-only-waffles-tree-branch_943281-76702.jpg?w=1380"
  },
  {
    title: "Diverse Artistic Expressions",
    description: "Journey through creativity, culture, and imagination",
    image: "https://img.freepik.com/premium-photo/sunset-silhouettes-trees-mountains-birds-flying_979520-22514.jpg?w=1380"
  },
  {
    title: "Support Independent Artists",
    description: "Every purchase directly supports talented creators",
    image: "https://img.freepik.com/premium-photo/beautiful-colorful-intricate-floral-backgorund-abstract-floral-wallpaper-generative-ai_751108-3483.jpg?w=1380"
  },
  {
    title: "Affordable Art for Everyone",
    description: "High-quality art pieces at accessible prices",
    image: "https://img.freepik.com/free-photo/vibrant-bouquet-colorful-flowers-reflects-beauty-nature-generated-by-artificial-intelligence_188544-240296.jpg?t=st=1743064205~exp=1743067805~hmac=c7dec25d5f6bfdfc7267d087c0e1863c8854dfb4a6e4c0378b421082de626d1d&w=1380"
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
    }, 3000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval);
  }, []);

  const fetchArtworks = () => {
    axios.get("http://localhost:5000/art")
      .then((response) => {
        if (response.data && response.data.success && Array.isArray(response.data.data)) {
          setArtworks(response.data.data);
        } else {
          console.error("Expected an array in response, but received:", response.data);
        }
      })
      .catch((error) => {
        console.error(" Error fetching artworks:", error);
      });
  };

  const toggleFavorite = (id) => {
    setFavorites(prev => prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]);
  };

  const addToCart = (artwork) => {
    //cart from localStorage
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    
    // Create a normalized cart item 
    const cartItem = {
      id: artwork._id || artwork.id,
      title: artwork.title || artwork.artType,
      artType: artwork.artType,
      artistName: artwork.artistName,
      price: artwork.price,
      image: artwork.image,
      quantity: 1
    };
    
    // Check item already exists
    const existingItemIndex = existingCart.findIndex(
      item => String(item.id) === String(cartItem.id) || 
             String(item._id) === String(cartItem.id)
    );
    
    if (existingItemIndex >= 0) {
      // Item exists, show message
      alert("This artwork is already in your cart!");
      return;
    }
    
    // Add new item
    const updatedCart = [...existingCart, cartItem];
    
    // Save localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    
    try {
      // Standard Event
      window.dispatchEvent(new Event("cartUpdated"));
      
      // Custom Event with more data and better compatibility
      const customEvent = new CustomEvent("cartUpdated", { 
        detail: { cart: updatedCart } 
      });
      window.dispatchEvent(customEvent);
    } catch (e) {
      console.error("Error dispatching cart event:", e);
    }
    
    alert(`${cartItem.title} has been added to your cart!`);
    console.log("Current cart after adding:", updatedCart);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/mainart?search=${encodeURIComponent(searchQuery)}`);
    }
  };
  
  const sortedArtworks = [...artworks].sort((a, b) => {
    if (sortOption === "name") return a.artType.localeCompare(b.artType);
    if (sortOption === "price") return a.price - b.price;
    return 0;
  });

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

      <div className="art-home-container">
        <div className="search-container">
          <form onSubmit={handleSearch} className="search-form">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search artworks..."
              className="search-input"
            />
            <button type="submit" className="search-button">
              <FaSearch /> Search
            </button>
          </form>
        </div>

        <div className="sort-container">
          <label>Sort by: </label>
          <select onChange={(e) => setSortOption(e.target.value)}>
            <option value="name">A-Z</option>
            <option value="price">Price</option>
          </select>
        </div>
        
        <div className="art-grid">
          {sortedArtworks.map((art) => (
            <div key={art._id} className="art-card">
              <a 
                href={`/mainart/${art._id}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="art-link"
              >
                <img
                  src={art.image || "https://via.placeholder.com/150"}
                  alt={art.artType}
                  className="art-image"
                />
                <h3 className="art-title">{art.artType}</h3>
              </a>
              <p className="art-price">Price: <span>Rs.{art.price}.00</span></p>
              <p className="art-artist">Artist: {art.artistName}</p>
              <div className="art-actions">
                <FaHeart
                  className={favorites.includes(art._id) ? "favorite active" : "favorite"}
                  onClick={() => toggleFavorite(art._id)}
                />
                <button className="add-to-cart-btn" onClick={() => addToCart(art)}>
                  <FaShoppingCart /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
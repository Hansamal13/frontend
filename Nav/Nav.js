import React, { useState, useEffect } from 'react';
import './Nav.css';
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function Nav() {
  const [showArtistDropdown, setShowArtistDropdown] = useState(false);
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  
  // Update cart count whenever localStorage changes
  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      // Count total quantity across all items
      const count = cart.reduce((total, item) => total + (item.quantity || 1), 0);
      setCartCount(count);
    };
    
    // Initial count
    updateCartCount();
    
    // Add event listener for storage changes
    window.addEventListener("storage", updateCartCount);
    
    // Custom event for cart updates that happen in the same window
    window.addEventListener("cartUpdated", updateCartCount);
    
    return () => {
      window.removeEventListener("storage", updateCartCount);
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);

  const toggleArtistDropdown = () => {
    setShowArtistDropdown(!showArtistDropdown);
    setShowLoginDropdown(false);
  };

  const toggleLoginDropdown = () => {
    setShowLoginDropdown(!showLoginDropdown);
    if (!showArtistDropdown) {
      setShowArtistDropdown(true);
    }
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        ARTSPHERE
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/mainart">ART</Link></li>
        
        <li className="dropdown">
          <button onClick={toggleArtistDropdown} className="dropdown-toggle">
            ADMIN
          </button>
          {showArtistDropdown && (
            <ul className="dropdown-menu">
              <li className="dropdown">
                <button onClick={toggleLoginDropdown} className="dropdown-toggle">
                  Login
                </button>
                {showLoginDropdown && (
                  <ul className="sub-dropdown-menu">
                    <li><Link to="/adduser">Add Users For Workshops</Link></li>
                    <li><Link to="/users">Manage Worshop Users</Link></li>
                    <li><Link to="/workshopform">Add Workshops</Link></li>
                    <li><Link to="/workshopdetails">Manage Worshops</Link></li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>
        <li><Link to="/exhibition">EXHIBITION</Link></li>
        <li><Link to="/auction">AUCTION</Link></li>
        <li><Link to="/home">WORKSHOP</Link></li>
        <li>
          <Link to="/cart" className="cart-link">
            <FaShoppingCart className="cart-icon" />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            <span className="cart-text">CART</span>
          </Link>
        </li>
      </ul>

    </nav>
  );
}

export default Nav;
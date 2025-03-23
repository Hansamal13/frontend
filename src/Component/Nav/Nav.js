import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div className="containers">
        {/* Logo */}
        <div className="logo">ARTSPHERE</div>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li><Link to="/mainhome">HOME</Link></li>
          <li><Link to="/mainart">ART</Link></li>


          <li><Link to="/signupPage">SIGN UP</Link></li>
          <li><Link to="/userdetails">USER DETAILS</Link></li>

          
          <li><Link to="/exhibition">EXHIBITION</Link></li>
          <li><Link to="/auction">AUCTION</Link></li>
          <li><Link to="/workshop">WORKSHOP</Link></li>
          <li><Link to="/maincart">CART</Link></li>
         
        </ul>

        {/* Search Bar */}
        <div className="search-container">
          <input type="text" placeholder="Search..." />
          <button>🔍</button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

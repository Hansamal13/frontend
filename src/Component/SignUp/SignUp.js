import React from 'react';
import Nav from '../Nav/Nav';
import './SignUpCss.css';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div>
      <Nav />
      <h1>Sign Up Customer</h1>

      <div className="container">
        <div className="signup-box">

          {/* Art Lover / Collector Section */}
          <div className="box collector">
            <h2>I am an art lover, a collector</h2>
            <p>Create an account to save your favorites and to receive personal offers.</p>
            <button className="main-btn"><Link to="/adduser">Sign up with email</Link></button>
            <div className="or">or</div>
            <button className="social-btn google-btn">
              <img className="G" src="/search.ico" alt="Google Logo" /> Continue with Google
            </button>
            <button className="social-btn facebook-btn">
              <img className="F" src="/facebook.ico" alt="Facebook Logo" /> Continue with Facebook
            </button>
            <p className="small-text">Already have an account? <Link to="/Alllogin">Log in</Link></p>
          </div>

          {/* Artist Section */}
          <div className="box artist">
            <h2>I am an artist</h2>
            <p>You are a painter, photographer, sculptor, or draftsman.</p>
            <button className="main-btn"><Link to ="/adduser">Signup with Email</Link></button>
            <p className="small-text">You already are a Singulart artist? <Link to="#">Log in</Link></p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default SignUp;

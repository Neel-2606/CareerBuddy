import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-section">
        <img src="/logo.jpg" alt="CareerBuddy Logo" className="logo-img" />
        <span className="brand-name">Career Buddy</span>
      </div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#assistant">AI Assistant</a></li>
        <li><a href="#resume">Resume Builder</a></li>
      </ul>
      <div className="auth-buttons">
        <button className="login-btn">Login</button>
        <button className="register-btn">Register</button>
      </div>
    </nav>
  );
}

export default Navbar;

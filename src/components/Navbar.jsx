import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="logo-section">
        <img src="/logo.jpg" alt="CareerBuddy Logo" className="logo-img" />
        <span className="brand-name">Career Buddy</span>
        <button className="hamburger" onClick={toggleMenu}>☰</button>
      </div>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><a href="#about">About</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#assistant">AI Assistant</a></li>
        <li><a href="#resume">Resume Builder</a></li>
      </ul>

      <div className={`auth-buttons ${isOpen ? 'open' : ''}`}>
        <button className="login-btn" onClick={() => navigate('/login')}>Login</button>
        <button className="register-btn" onClick={() => navigate('/signup')}>Register</button>
      </div>
    </nav>
  );
}

export default Navbar;


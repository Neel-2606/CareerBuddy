import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    document.body.classList.toggle('menu-open', !isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
    document.body.classList.remove('menu-open')
  }

  useEffect(() => {
    return () => document.body.classList.remove('menu-open')
  }, [])

  return (
    <>
      <div className="mobile-backdrop show" style={{ display: isOpen ? 'block' : 'none' }} onClick={closeMenu}></div>

      <nav className="navbar">
        <div className="logo-section">
          <img src="/logo.jpg" alt="CareerBuddy Logo" className="logo-img" />
          <span className="brand-name">Career Buddy</span>
        </div>

        <button className="hamburger" onClick={toggleMenu}>☰</button>

        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#features" onClick={closeMenu}>Features</a></li>
          <li><a href="#assistant" onClick={closeMenu}>AI Assistant</a></li>
          <li><a href="#resume" onClick={closeMenu}>Resume Builder</a></li>
        </ul>

        <div className={`auth-buttons ${isOpen ? 'open' : ''}`}>
          <button className="login-btn" onClick={() => { navigate('/login'); closeMenu() }}>Login</button>
          <button className="register-btn" onClick={() => { navigate('/signup'); closeMenu() }}>Register</button>
        </div>
      </nav>
    </>
  )
}

export default Navbar

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Assistant from './components/Assistant';
import ResumeBuilder from './components/ResumeBuilder';
import AdminPanel from './components/AdminPanel';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <section id="hero" className="section">
                <Hero />
              </section>

              <section id="about" className="section">
                <About />
              </section>

              <section id="features" className="section">
                <Features />
              </section>

              <section id="assistant" className="section">
                <Assistant />
              </section>

              <section id="resume" className="section">
                <ResumeBuilder />
              </section>
            </>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;

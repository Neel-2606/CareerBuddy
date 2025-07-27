import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Assistant from './components/Assistant';
import ResumeBuilder from './components/ResumeBuilder';
import AdminPanel from './components/AdminPanel';
import './App.css';

function App() {
  return (
    <>
      <Navbar />

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

      <section id="admin" className="section">
        <AdminPanel />
      </section>
    </>
  );
}

export default App;
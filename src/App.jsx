import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Assistant from './components/Assistant';
import ResumeBuilder from './components/ResumeBuilder';
import AdminPanel from './components/AdminPanel';

function App() {
  return (
    <>
      <Navbar />

      <section id="hero" className="section-wrapper">
        <Hero />
      </section>

      <section id="about" className="section-wrapper">
        <About />
      </section>

      <section id="features" className="section-wrapper">
        <Features />
      </section>

      <section id="assistant" className="section-wrapper">
        <Assistant />
      </section>

      <section id="resume" className="section-wrapper">
        <ResumeBuilder />
      </section>

      <section id="admin" className="section-wrapper">
        <AdminPanel />
      </section>
    </>
  );
}

export default App;




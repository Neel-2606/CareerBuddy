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
      <Hero />
      <About />
      <Features />
      <Assistant />
      <ResumeBuilder />
      <AdminPanel />
    </>
  );
}

export default App;



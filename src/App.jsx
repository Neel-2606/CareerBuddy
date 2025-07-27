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
      <div className="py-20"><Hero /></div>
      <div className="py-20 bg-gray-50"><About /></div>
      <div className="py-20"><Features /></div>
      <div className="py-20 bg-gray-50"><Assistant /></div>
      <div className="py-20"><ResumeBuilder /></div>
      <div className="py-20 bg-gray-50"><AdminPanel /></div>
    </>
  );
}

export default App;




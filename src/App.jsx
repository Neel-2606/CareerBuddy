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

      <section className="py-24 px-4 sm:px-8">
        <Hero />
      </section>

      <section className="py-24 px-4 sm:px-8 bg-gray-50">
        <About />
      </section>

      <section className="py-24 px-4 sm:px-8">
        <Features />
      </section>

      <section className="py-24 px-4 sm:px-8 bg-gray-50">
        <Assistant />
      </section>

      <section className="py-24 px-4 sm:px-8">
        <ResumeBuilder />
      </section>

      <section className="py-24 px-4 sm:px-8 bg-gray-50">
        <AdminPanel />
      </section>
    </>
  );
}

export default App;





import React from 'react';

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-white bg-[#0f172a] px-6 text-center"
    >
      <h1 className="text-5xl font-bold mb-4">Welcome to CareerBuddy</h1>
      <p className="text-xl max-w-2xl">
        Your smart assistant to guide your career path — AI-powered and always ready to help.
      </p>
      <button className="mt-6 px-6 py-3 bg-blue-600 rounded-md hover:bg-blue-700 transition">
        Get Started
      </button>
    </section>
  );
}

export default Hero;


// HeroSection.js
import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-hero-bg bg-cover bg-center h-screen">
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Welcome to our Website
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
        </p>
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
          Signup
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
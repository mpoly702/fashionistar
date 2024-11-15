// AboutSection.js
import React from 'react';

const AboutSection = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-lg leading-relaxed mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Our Mission</h3>
            <p className="text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
            </p>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Our Vision</h3>
            <p className="text-lg leading-relaxed">
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 px-4">
            <h3 className="text-xl font-bold mb-2">Our Values</h3>
            <p className="text-lg leading-relaxed">
              Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
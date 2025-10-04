import React from 'react';
import heroImg from '../assets/heroImg.jpeg';

const Hero = () => {
  return (
    <section className="bg-white" id="hero">
      <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12">

        {/* Left Side - Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Master the IELTS Exam <br className="hidden sm:block" />
            <span className="text-indigo-600">with Confidence</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
            Get access to real test simulations, expert tips, and AI-powered feedback designed to help you achieve a higher band score — faster and smarter.
          </p>

          <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
            <a
              href="#"
              className="px-6 py-3 bg-indigo-600 text-white text-base font-medium rounded-md shadow hover:bg-indigo-700 transition duration-300"
            >
              🚀 Start Practicing
            </a>
            <a
              href="#"
              className="px-6 py-3 text-indigo-600 border border-indigo-600 text-base font-medium rounded-md hover:bg-indigo-50 transition duration-300"
            >
              📘 Learn More
            </a>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={heroImg}
            alt="IELTS Preparation"
            className="w-full max-w-md sm:max-w-lg lg:max-w-xl rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;

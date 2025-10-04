import React, { useState } from 'react';
import logo from '../assets/logo.jpg'; // ✅ Replace with your actual logo

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="IELTSPro Logo" className="w-10 h-10 rounded-full" />
          <span className="text-xl font-bold text-gray-800">IELTSPro</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#hero" className="text-gray-700 hover:text-indigo-600 transition">Home</a>
          <a href="#courses" className="text-gray-700 hover:text-indigo-600 transition">Courses</a>
          <a href="#features" className="text-gray-700 hover:text-indigo-600 transition">Features</a>
          <a href="#testimonials" className="text-gray-700 hover:text-indigo-600 transition">Testimonials</a>
          <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition">Contact</a>
          <a href="#" className="ml-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition text-sm font-medium">
            Get Started
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 text-2xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-6 pt-4 pb-6 bg-white shadow-md space-y-4">
          <a href="#" className="block text-gray-700 hover:text-indigo-600 transition">Home</a>
          <a href="#" className="block text-gray-700 hover:text-indigo-600 transition">Courses</a>
          <a href="#" className="block text-gray-700 hover:text-indigo-600 transition">Features</a>
          <a href="#" className="block text-gray-700 hover:text-indigo-600 transition">Contact</a>
          <a
            href="#"
            className="block w-full text-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition text-sm font-medium"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

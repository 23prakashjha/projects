import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Courses from './components/Courses';
import Contact from './components/Contact';


function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Courses/>
      <Features />
      <Testimonials />
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;

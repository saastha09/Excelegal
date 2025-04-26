import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = document.getElementById('navbar')?.offsetHeight || 0;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="hero-bg min-h-screen flex items-center relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto md:mx-0">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Consult Your Software Solution Idea With Us
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl mb-8 text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We build trust through innovation, delivering affordable and cutting-edge solutions for the digital era.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button 
              onClick={() => handleScrollTo('contact')}
              className="btn-glow bg-[#0d6efd] hover:bg-blue-600 text-white py-3 px-8 rounded-full font-semibold transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#0d6efd] focus:ring-opacity-50 text-center"
            >
              Get Started
            </button>
            <button 
              onClick={() => handleScrollTo('services')}
              className="border-2 border-white hover:border-[#0d6efd] text-white hover:text-[#0d6efd] py-3 px-8 rounded-full font-semibold transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 text-center"
            >
              Explore Now
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Animated background shapes */}
      <motion.div 
        className="absolute bottom-10 right-10 w-32 h-32 bg-[#0d6efd] rounded-full opacity-10"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-40 right-40 w-24 h-24 bg-[#4dabf7] rounded-full opacity-10"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.div 
        className="absolute top-40 left-20 w-40 h-40 bg-purple-500 rounded-full opacity-10"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
    </section>
  );
};

export default Hero;

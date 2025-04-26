import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const AboutUs: React.FC = () => {
  const [contentRef, contentInView] = useScrollReveal();
  const [imageRef, imageInView] = useScrollReveal();

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
    <section id="about" className="py-16 md:py-24 bg-[#0f0f2d]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <motion.div 
            ref={contentRef}
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={contentInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Technological Solutions Tailored for the New Digital Era
            </h2>
            <p className="text-gray-200 mb-6">
              Since our establishment in 2019, Excelegal has been at the forefront of technology innovation. 
              We're trusted by companies worldwide for our ability to transform complex challenges into 
              streamlined digital solutions.
            </p>
            <p className="text-gray-200 mb-8">
              Our team of experts combines deep technical knowledge with business acumen to deliver 
              software solutions that drive growth and efficiency for our clients.
            </p>
            <button 
              onClick={() => handleScrollTo('contact')}
              className="btn-glow bg-[#0d6efd] hover:bg-blue-600 text-white py-3 px-8 rounded-full font-semibold transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#0d6efd] focus:ring-opacity-50 inline-block"
            >
              Get In Touch
            </button>
          </motion.div>
          
          <motion.div 
            ref={imageRef}
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={imageInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-lg overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Excelegal Team" 
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
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
    <footer className="bg-[#0f0f2d] py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Excelegal</h3>
            <p className="text-gray-200 mb-4">
              Innovative software solutions tailored for the new digital era.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="#" 
                className="text-gray-300 hover:text-[#0d6efd] transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
              >
                <i className="fab fa-facebook-f"></i>
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-300 hover:text-[#0d6efd] transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
              >
                <i className="fab fa-instagram"></i>
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-300 hover:text-[#0d6efd] transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
              >
                <i className="fab fa-linkedin-in"></i>
              </motion.a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleScrollTo('about')}
                  className="text-gray-300 hover:text-[#0d6efd] transition-colors duration-300"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollTo('services')}
                  className="text-gray-300 hover:text-[#0d6efd] transition-colors duration-300"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollTo('case-studies')}
                  className="text-gray-300 hover:text-[#0d6efd] transition-colors duration-300"
                >
                  Case Studies
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollTo('career')}
                  className="text-gray-300 hover:text-[#0d6efd] transition-colors duration-300"
                >
                  Careers
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollTo('contact')}
                  className="text-gray-300 hover:text-[#0d6efd] transition-colors duration-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-[#0d6efd] transition-colors duration-300">Cloud Consulting</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#0d6efd] transition-colors duration-300">Digital Marketing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#0d6efd] transition-colors duration-300">Web Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#0d6efd] transition-colors duration-300">Mobile App Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#0d6efd] transition-colors duration-300">Software Testing</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-[#0d6efd]"></i>
                <span className="text-gray-300">123 Tech Park, Innovation Street, Silicon Valley, CA 94025</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3 text-[#0d6efd]"></i>
                <span className="text-gray-300">info@excelegal.com</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt mr-3 text-[#0d6efd]"></i>
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">&copy; All Rights Reserved. Designed and Developed by Excelegal.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

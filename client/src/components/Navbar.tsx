import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavLinkClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = document.getElementById('navbar')?.offsetHeight || 0;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    closeMobileMenu();
  };

  return (
    <>
      <nav 
        id="navbar" 
        className={cn(
          "fixed w-full z-50 transition-all duration-300 py-4",
          isScrolled ? "bg-[#0a0a23] bg-opacity-95 shadow-lg" : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="text-2xl font-bold font-poppins text-white flex items-center">
            <span className="text-[#0d6efd] mr-1">Excel</span>egal
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <button onClick={() => handleNavLinkClick('hero')} className="text-white hover:text-[#0d6efd] transition-colors duration-300">Home</button>
            <button onClick={() => handleNavLinkClick('about')} className="text-white hover:text-[#0d6efd] transition-colors duration-300">About Us</button>
            <button onClick={() => handleNavLinkClick('services')} className="text-white hover:text-[#0d6efd] transition-colors duration-300">Services</button>
            <button onClick={() => handleNavLinkClick('case-studies')} className="text-white hover:text-[#0d6efd] transition-colors duration-300">Case Studies</button>
            <button onClick={() => handleNavLinkClick('career')} className="text-white hover:text-[#0d6efd] transition-colors duration-300">Career</button>
            <button onClick={() => handleNavLinkClick('contact')} className="text-white hover:text-[#0d6efd] transition-colors duration-300">Contact Us</button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div 
          className={cn(
            "md:hidden fixed top-0 right-0 h-full w-64 bg-[#0f0f2d] shadow-lg z-50 transition-transform duration-300",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="p-5">
            <button 
              className="float-right text-white focus:outline-none"
              onClick={closeMobileMenu}
              aria-label="Close menu"
            >
              <i className="fas fa-times text-xl"></i>
            </button>
            <div className="clear-both pt-10 flex flex-col space-y-4">
              <button onClick={() => handleNavLinkClick('hero')} className="text-white hover:text-[#0d6efd] transition-colors duration-300 py-2 text-left">Home</button>
              <button onClick={() => handleNavLinkClick('about')} className="text-white hover:text-[#0d6efd] transition-colors duration-300 py-2 text-left">About Us</button>
              <button onClick={() => handleNavLinkClick('services')} className="text-white hover:text-[#0d6efd] transition-colors duration-300 py-2 text-left">Services</button>
              <button onClick={() => handleNavLinkClick('case-studies')} className="text-white hover:text-[#0d6efd] transition-colors duration-300 py-2 text-left">Case Studies</button>
              <button onClick={() => handleNavLinkClick('career')} className="text-white hover:text-[#0d6efd] transition-colors duration-300 py-2 text-left">Career</button>
              <button onClick={() => handleNavLinkClick('contact')} className="text-white hover:text-[#0d6efd] transition-colors duration-300 py-2 text-left">Contact Us</button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeMobileMenu}
        ></div>
      )}
    </>
  );
};

export default Navbar;

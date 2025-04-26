import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhatWeDo from '@/components/WhatWeDo';
import AboutUs from '@/components/AboutUs';
import Statistics from '@/components/Statistics';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import Clients from '@/components/Clients';
import Career from '@/components/Career';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <AboutUs />
      <Statistics />
      <Services />
      <Projects />
      <Testimonials />
      <Clients />
      <Career />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Home;

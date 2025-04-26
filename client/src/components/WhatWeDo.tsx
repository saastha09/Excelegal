import React from 'react';
import AnimatedSection from './AnimatedSection';

const WhatWeDo: React.FC = () => {
  return (
    <section id="what-we-do" className="py-16 md:py-24 bg-[#0a0a23]">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection 
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          direction="up"
          delay={0.2}
        >
          <h2>What We Do</h2>
        </AnimatedSection>
        
        {/* Block 1 */}
        <AnimatedSection 
          className="flex flex-col md:flex-row gap-10 items-center mb-20"
          direction="up"
          delay={0.3}
          threshold={0.2}
        >
          <div className="md:w-1/2 order-2 md:order-1">
            <h3 className="text-2xl font-bold text-[#0d6efd] mb-4">Help To Grow Business</h3>
            <p className="text-gray-200 mb-6">
              We identify growth opportunities and implement strategies that help businesses scale effectively. 
              Our approach combines innovation with proven frameworks to create sustainable growth paths for our clients.
            </p>
            <button className="inline-flex items-center text-[#0d6efd] hover:text-[#4dabf7] transition-colors duration-300">
              Learn more <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <div className="rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Business Growth" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </AnimatedSection>
        
        {/* Block 2 */}
        <AnimatedSection 
          className="flex flex-col md:flex-row gap-10 items-center mb-20"
          direction="up"
          delay={0.4}
          threshold={0.2}
        >
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Business Consultancy" 
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-[#0d6efd] mb-4">Business Consultancy</h3>
            <p className="text-gray-200 mb-6">
              Our expert consultants provide strategic guidance to transform business challenges into opportunities.
              We work closely with your team to develop tailored solutions that align with your business goals.
            </p>
            <button className="inline-flex items-center text-[#0d6efd] hover:text-[#4dabf7] transition-colors duration-300">
              Learn more <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </div>
        </AnimatedSection>
        
        {/* Block 3 */}
        <AnimatedSection 
          className="flex flex-col md:flex-row gap-10 items-center"
          direction="up"
          delay={0.5}
          threshold={0.2}
        >
          <div className="md:w-1/2 order-2 md:order-1">
            <h3 className="text-2xl font-bold text-[#0d6efd] mb-4">24/7 Support</h3>
            <p className="text-gray-200 mb-6">
              We provide round-the-clock technical support to ensure your systems run smoothly at all times.
              Our dedicated support team is always ready to resolve issues promptly, minimizing downtime.
            </p>
            <button className="inline-flex items-center text-[#0d6efd] hover:text-[#4dabf7] transition-colors duration-300">
              Learn more <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <div className="rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="24/7 Support" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default WhatWeDo;

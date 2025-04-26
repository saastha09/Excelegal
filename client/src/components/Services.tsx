import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const Services: React.FC = () => {
  const services = [
    {
      icon: "fas fa-cloud",
      title: "Cloud Consulting",
      description: "Expert guidance on cloud migration, optimization, and infrastructure design to maximize performance and cost-efficiency."
    },
    {
      icon: "fas fa-paint-brush",
      title: "UI/UX Designing",
      description: "Creative and user-centered design solutions that enhance user experience, improve usability, and create visually stunning interfaces."
    },
    {
      icon: "fas fa-laptop-code",
      title: "Custom Web Development",
      description: "Tailored web solutions with cutting-edge technologies to create powerful, scalable applications for your business."
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications designed to deliver seamless experiences across all devices."
    },
    {
      icon: "fas fa-vial",
      title: "Software Testing",
      description: "Comprehensive testing services to ensure your software meets the highest quality standards and performs flawlessly."
    },
    {
      icon: "fas fa-headset",
      title: "24/7 Customer Support",
      description: "Round-the-clock technical support to ensure your systems operate smoothly and issues are resolved promptly."
    }
  ];
  
  return (
    <section id="services" className="py-16 md:py-24 bg-[#0f0f2d]">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          direction="up"
          delay={0.2}
        >
          <h2>Our Services</h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection
              key={index}
              className="bg-[#0a0a23] p-8 rounded-lg card-hover border border-transparent hover:border-[#0d6efd] transition-colors duration-300"
              direction="up"
              delay={0.2 + index * 0.1}
              threshold={0.2}
            >
              <motion.div whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(13, 110, 253, 0.2)" }}>
                <div className="text-[#0d6efd] text-3xl mb-4">
                  <i className={service.icon}></i>
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-200">{service.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

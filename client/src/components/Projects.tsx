import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const Projects: React.FC = () => {
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "TechFlow CRM",
      description: "A comprehensive customer relationship management system for a tech company, featuring automated workflows and analytics."
    },
    {
      image: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "MediConnect Platform",
      description: "A secure healthcare communication platform connecting patients with healthcare providers for virtual consultations."
    },
    {
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "FinTrack Portal",
      description: "A financial management portal with real-time transaction tracking, budget planning, and investment analytics tools."
    },
    {
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Smart Retail Solution",
      description: "An integrated retail management system with inventory tracking, customer insights, and omnichannel sales capabilities."
    }
  ];
  
  return (
    <section id="case-studies" className="py-16 md:py-24 bg-[#0a0a23]">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          direction="up"
          delay={0.2}
        >
          <h2>Our Projects</h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection
              key={index}
              className="bg-[#0f0f2d] rounded-lg overflow-hidden card-hover"
              direction="up"
              delay={0.2 + index * 0.1}
              threshold={0.2}
            >
              <motion.div whileHover={{ y: -10 }}>
                <div className="h-64 overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-200 mb-4">{project.description}</p>
                  <a href="#" className="inline-flex items-center text-[#0d6efd] hover:text-[#4dabf7] transition-colors duration-300">
                    View Case Study <i className="fas fa-arrow-right ml-2"></i>
                  </a>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

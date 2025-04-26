import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

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
      image: "https://images.unsplash.com/photo-1565547161108-33f31500e27b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "FinTrack Portal",
      description: "A financial management portal with real-time transaction tracking, budget planning, and investment analytics tools."
    },
    {
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Smart Retail Solution",
      description: "An integrated retail management system with inventory tracking, customer insights, and omnichannel sales capabilities."
    }
  ];
  
  const [titleRef, titleInView] = useScrollReveal();
  
  return (
    <section id="case-studies" className="py-16 md:py-24 bg-[#0a0a23]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2 
          ref={titleRef}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Our Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const [projectRef, projectInView] = useScrollReveal();
            
            return (
              <motion.div
                key={index}
                ref={projectRef}
                className="bg-[#0f0f2d] rounded-lg overflow-hidden card-hover"
                initial={{ opacity: 0, y: 50 }}
                animate={projectInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
              >
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;

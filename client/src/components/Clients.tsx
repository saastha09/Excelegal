import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const Clients: React.FC = () => {
  const clients = [
    {
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      name: "David Mitchell",
      company: "TechVision Inc.",
      description: "Excelegal transformed our entire tech infrastructure, delivering a seamless cloud migration that increased our efficiency by 45%."
    },
    {
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      name: "Sarah Johnson",
      company: "HealthPlus Solutions",
      description: "The custom healthcare platform Excelegal built for us revolutionized how we connect with patients. Outstanding work and responsive support."
    },
    {
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      name: "Michael Reynolds",
      company: "Global Finance Group",
      description: "Their expertise in financial software development is unmatched. The FinTrack system they developed has streamlined our operations substantially."
    }
  ];
  
  return (
    <section className="py-16 md:py-20 bg-[#0a0a23]">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          direction="up"
          delay={0.2}
        >
          <h2>Our Clients</h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <AnimatedSection
              key={index}
              className="bg-[#0f0f2d] rounded-lg overflow-hidden card-hover"
              direction="up"
              delay={0.2 + index * 0.1}
              threshold={0.2}
            >
              <motion.div whileHover={{ y: -5 }}>
                <div className="h-64 overflow-hidden">
                  <img 
                    src={client.image}
                    alt={client.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{client.name}</h3>
                  <p className="text-[#0d6efd] text-sm mb-3">{client.company}</p>
                  <p className="text-gray-200 mb-4">{client.description}</p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;

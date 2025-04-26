import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Clients: React.FC = () => {
  const clients = ["Client 1", "Client 2", "Client 3", "Client 4", "Client 5", "Client 6"];
  
  const [titleRef, titleInView] = useScrollReveal();
  const [clientsRef, clientsInView] = useScrollReveal();
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  return (
    <section className="py-16 md:py-20 bg-[#0a0a23]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2 
          ref={titleRef}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Our Clients
        </motion.h2>
        
        <motion.div 
          ref={clientsRef}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
          variants={container}
          initial="hidden"
          animate={clientsInView ? "show" : "hidden"}
        >
          {clients.map((client, index) => (
            <motion.div 
              key={index}
              className="bg-[#0f0f2d] p-6 rounded-lg flex items-center justify-center h-24 card-hover"
              variants={item}
              whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(13, 110, 253, 0.2)" }}
            >
              <span className="text-lg font-semibold text-gray-300">{client}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;

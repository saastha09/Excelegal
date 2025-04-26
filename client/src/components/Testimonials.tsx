import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Excelegal transformed our digital presence with their innovative solutions. Their team was professional, responsive, and delivered beyond our expectations.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "John Doe",
      title: "CTO, TechVision"
    },
    {
      quote: "Working with Excelegal was a game-changer for our business. Their cloud migration strategy saved us both time and resources while improving performance.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Sarah Johnson",
      title: "CEO, Novex Solutions"
    },
    {
      quote: "The mobile application developed by Excelegal has significantly improved our customer engagement. Their support team is always available and quick to resolve issues.",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      name: "Michael Chen",
      title: "Marketing Director, GlobalReach"
    }
  ];
  
  const [titleRef, titleInView] = useScrollReveal();
  
  return (
    <section className="py-16 md:py-24 bg-[#0f0f2d]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2 
          ref={titleRef}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Client Testimonials
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const [testimonialRef, testimonialInView] = useScrollReveal();
            
            return (
              <motion.div
                key={index}
                ref={testimonialRef}
                className="bg-[#0a0a23] p-8 rounded-lg card-hover"
                initial={{ opacity: 0, y: 50, rotate: 0 }}
                animate={testimonialInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ rotate: 1, y: -10 }}
              >
                <div className="text-[#0d6efd] text-4xl mb-4">
                  <i className="fas fa-quote-left"></i>
                </div>
                <p className="text-gray-200 mb-6">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.title}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

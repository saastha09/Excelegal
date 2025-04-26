import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface CounterProps {
  end: number;
  duration: number;
  delay?: number;
}

const Counter: React.FC<CounterProps> = ({ end, duration, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    
    if (countRef.current) {
      observer.observe(countRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    let animationFrameId: number;
    
    const startCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const timeProgress = Math.min(progress / (duration * 1000), 1);
      
      setCount(Math.floor(timeProgress * end));
      
      if (timeProgress < 1) {
        animationFrameId = requestAnimationFrame(startCount);
      }
    };
    
    const timeoutId = setTimeout(() => {
      animationFrameId = requestAnimationFrame(startCount);
    }, delay * 1000);
    
    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(animationFrameId);
    };
  }, [end, duration, delay, isInView]);
  
  return <span ref={countRef}>{count}</span>;
};

const Statistics: React.FC = () => {
  const stats = [
    { icon: "fas fa-calendar-alt", count: 850, label: "Days Worked" },
    { icon: "fas fa-users", count: 40, label: "Employees" },
    { icon: "fas fa-project-diagram", count: 160, label: "Projects Completed" },
    { icon: "fas fa-smile", count: 225, label: "Clients Satisfied" }
  ];
  
  return (
    <section className="py-16 md:py-24 bg-[#0a0a23]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const [ref, inView] = useScrollReveal();
            
            return (
              <motion.div
                key={index}
                ref={ref}
                className="bg-[#0f0f2d] p-8 rounded-lg text-center card-hover"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-[#0d6efd] text-4xl mb-3">
                  <i className={stat.icon}></i>
                </div>
                <div className="text-4xl font-bold mb-2">
                  <Counter end={stat.count} duration={2} delay={0.5} />+
                </div>
                <p className="text-gray-200">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Statistics;

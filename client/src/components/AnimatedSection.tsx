import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  duration?: number;
  threshold?: number;
  id?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  delay = 0.2,
  direction = 'up',
  distance = 50,
  duration = 0.8,
  threshold = 0.1,
  id
}) => {
  const [ref, isInView] = useScrollReveal({ threshold });
  
  const getVariants = () => {
    // Define variant types with both x, y properties
    type VariantProps = {
      opacity: number;
      x?: number;
      y?: number;
      transition?: {
        duration: number;
        delay: number;
        ease: string;
      };
    };
    
    type Variants = {
      hidden: VariantProps;
      visible: VariantProps;
    };
    
    // Create base variants
    const variants: Variants = {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: { 
          duration, 
          delay,
          ease: "easeOut"
        } 
      }
    };
    
    // Add directional properties
    switch (direction) {
      case 'up':
        variants.hidden.y = distance;
        variants.visible.y = 0;
        break;
      case 'down':
        variants.hidden.y = -distance;
        variants.visible.y = 0;
        break;
      case 'left':
        variants.hidden.x = distance;
        variants.visible.x = 0;
        break;
      case 'right':
        variants.hidden.x = -distance;
        variants.visible.x = 0;
        break;
    }
    
    return variants;
  };
  
  return (
    <motion.div
      ref={ref}
      id={id}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={getVariants()}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
import { useRef, useState, useEffect } from 'react';

export const useScrollReveal = (options = { threshold: 0.1 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        // Update isInView state based on current visibility
        setIsInView(entry.isIntersecting);
        
        // Do not disconnect the observer to allow for re-animation
        // when elements enter and exit the viewport
      },
      {
        threshold: options.threshold,
        rootMargin: '0px'
      }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options.threshold]);
  
  return [ref, isInView] as const;
};

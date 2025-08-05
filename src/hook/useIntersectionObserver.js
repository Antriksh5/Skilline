import { useState, useEffect } from 'react';

function useIntersectionObserver(options) {
  const [elementRef, setElementRef] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (elementRef) {
      const observer = new IntersectionObserver((entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(elementRef); 
        }
      }, options);

      observer.observe(elementRef);

      return () => {
        if(observer && elementRef) {
          observer.unobserve(elementRef);
        }
      };
    }
  }, [elementRef, options]);

  return [setElementRef, isVisible];
}

export default useIntersectionObserver;
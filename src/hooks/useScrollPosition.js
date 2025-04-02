import { useState, useEffect } from 'react';

/**
 * Custom hook that tracks the scroll position of the window
 * @returns {Object} Object containing scrollX, scrollY, and direction
 */
const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState({
    x: 0,
    y: 0,
    direction: null, // 'up' or 'down'
    isScrolled: false,
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const currentScrollX = window.scrollX;
      const direction = currentScrollY > lastScrollY ? 'down' : 'up';
      const isScrolled = currentScrollY > 10;
      
      setScrollPosition({
        x: currentScrollX,
        y: currentScrollY,
        direction,
        isScrolled,
      });
      
      lastScrollY = currentScrollY;
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Call once to initialize
    handleScroll();
    
    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return scrollPosition;
};

export default useScrollPosition;
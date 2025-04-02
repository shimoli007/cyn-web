import { useState, useEffect } from 'react';

/**
 * Custom hook that tracks window dimensions and breakpoints
 * @returns {Object} Object containing width, height, and breakpoint info
 */
const useWindowSize = () => {
  // Function to determine the current breakpoint
  const getBreakpoint = (width) => {
    if (width < 640) return 'xs';
    if (width < 768) return 'sm';
    if (width < 1024) return 'md';
    if (width < 1280) return 'lg';
    return 'xl';
  };
  
  // Initialize with undefined to handle server-side rendering
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
    breakpoint: undefined,
    isMobile: undefined,
    isTablet: undefined,
    isDesktop: undefined,
  });
  
  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const breakpoint = getBreakpoint(width);
      
      setWindowSize({
        width,
        height,
        breakpoint,
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024,
      });
    };
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return windowSize;
};

export default useWindowSize;
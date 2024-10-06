import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { motion } from 'framer-motion'; // Import motion for animations
import Cards from '../components/Cards';
import { h1 } from 'framer-motion/client';

const Projects2 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false); // State for new content
  const textRef = useRef(null);
  const navigate = useNavigate(); // Initialize navigate function

  // Scroll effects for section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  // Button click handler to toggle content visibility
  const handleSeeMoreClick = () => {
    setIsContentVisible((prev) => !prev); // Toggle content visibility
  };

  return (
    <div className='bg-zinc-950 min-h-screen flex flex-col justify-center items-center'>
      {/* Title Section with added padding */}
      <div
        ref={textRef}
        className={`pt-16 transition-opacity duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h1 className='text-white text-center font-semibold text-3xl'>
          Discover My Creative and Innovative Projects
        </h1>
        <p className='text-white text-center mt-4 max-w-2xl text-lg'>
          From AI-powered solutions to real-time web applications, explore how I blend 
          creativity with technology to solve complex problems and craft cutting-edge user experiences.
        </p>
      </div>

      {/* Button */}
      <button
        onClick={handleSeeMoreClick} // Add onClick event
        className='mt-10 border rounded-xl border-white px-4 py-2 text-white hover:bg-white hover:text-black transition-colors duration-300'
      >
        <span>{isContentVisible ? 'Hide Projects' : 'Explore Projects'}</span> {/* Button text changes */}
      </button>

      {/* Content Section */}
      {isContentVisible && (
      <Cards /> // Render Cards component when content is visible
      )}
    </div>
  );
};

export default Projects2;
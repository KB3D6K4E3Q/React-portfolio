import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi'; // Importing an icon

const Work = () => {
  const navigate = useNavigate();
  
  // State for scroll visibility
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef(null);
  
  // Page transition animation
  const pageTransition = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.5, ease: "easeIn" } }
  };

  // Scroll effect using Intersection Observer
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

  // Animation variants for text
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Button hover variants
  const buttonVariants = {
    hover: {
      scale: 1.1,
      rotate: [0, 5, -5, 0], // Small rotation effect
      transition: { type: 'spring', stiffness: 300 },
    },
    tap: {
      scale: 0.95,
      transition: { type: 'spring', stiffness: 300 },
    },
  };

  return (
    <motion.section
      className='bg-white'
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}  // Apply page transition animation
    >
      <div className='text-black pt-[10vh] lg:flex lg:pt-[15vh] lg:pl-[10vw]'>
        <motion.h1 
          ref={textRef} 
          variants={textVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className='text-2xl p-8 font-light'
        >
          Helping brands and businesses to stand out in the digital era.
          Together we will set the new status quo. No nonsense, always
          on the cutting edge.
        </motion.h1>

        <motion.h2 
          ref={textRef} 
          variants={textVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className='text-md pt-10 pl-8 w-[65vw] font-light lg:pr-[10vw]'
        >
          The combination of my passion for design, code & interaction
          puts me in a unique position in the web design world.
        </motion.h2>
      </div>

      {/* Button */}
      <div className='flex justify-center lg:justify-end'>
        <motion.button 
          id="magnetic-btn"
          onClick={() => navigate('/about-me')} // Navigate to About Me page
          className='m-10 p-20 w-20 h-20 border-4 border-[#1C1D20] bg-[#1C1D20] rounded-full flex items-center justify-center transition-colors duration-300 ease-in-out'
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <span className='text-white flex items-center'>
            <FiArrowRight className='mr-2' /> About Me
          </span>
        </motion.button>
      </div>
    </motion.section>
  );
};

export default Work;
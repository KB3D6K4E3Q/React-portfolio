import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <div className="bg-zinc-800">
      <ul
        onMouseLeave={() => {
          setPosition((pv) => ({
            ...pv,
            opacity: 0,
          }));
        }}
        className="relative mx-auto flex w-fit rounded-full border-2 border-white bg-zinc-800 p-1 mt-4"
      >
        <Tab setPosition={setPosition} href="#Work">Work</Tab>
        <Tab setPosition={setPosition} href="#About">About</Tab>
        <Tab setPosition={setPosition} href="#Contact">Contact</Tab> {/* Added href here */}

        <Cursor position={position} />
      </ul>
    </div> 
  );
};

const Tab = ({ children, setPosition, href }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-[#dee2e6] mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      <a href={href} className="w-full h-full">{children}</a> {/* Wrap with anchor for navigation */}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12 transition-all duration-200 ease-in-out" // Added transition for smooth movement
    />
  );
};

export default SlideTabs;
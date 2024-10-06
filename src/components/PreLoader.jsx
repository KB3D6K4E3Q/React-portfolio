import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Example = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating the boot process, you can replace this with actual boot logic
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Adjust the time as per your need

    // Cleanup the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="grid place-content-center bg-[#343a40] px-4 py-24 min-h-screen">
          <BarLoader />
        </div>
      ) : (
        <div>
          <h1 className="hidden">d</h1>
        </div>
      )}
    </>
  );
};

const variants = {
  initial: {
    scaleY: 0.5,
    opacity: 0,
  },
  animate: {
    scaleY: 1,
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 1,
      ease: "circIn",
    },
  },
};

const BarLoader = () => {
  return (
    <motion.div
      transition={{
        staggerChildren: 0.25,
      }}
      initial="initial"
      animate="animate"
      className="flex gap-1"
    >
      <motion.div variants={variants} className="h-12 w-2 bg-white" />
      <motion.div variants={variants} className="h-12 w-2 bg-white" />
      <motion.div variants={variants} className="h-12 w-2 bg-white" />
      <motion.div variants={variants} className="h-12 w-2 bg-white" />
      <motion.div variants={variants} className="h-12 w-2 bg-white" />
    </motion.div>
  );
};

export default Example;
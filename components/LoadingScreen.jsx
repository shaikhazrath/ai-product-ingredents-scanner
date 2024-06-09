import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  const containerVariants = {
    initial: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const circleVariants = {
    initial: {
      opacity: 0,
      scale: 0.5,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        repeat: Infinity,
        repeatType: 'reverse',
        duration: 1.5,
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <h1 className="text-center font-medium text-white text-xl mb-8">
        Please wait this may take few sec to analyse
      </h1>
      <motion.div
        className="flex"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.div
          className="w-8 h-8 bg-white rounded-full mx-2"
          variants={circleVariants}
        />
        <motion.div
          className="w-8 h-8 bg-white rounded-full mx-2"
          variants={circleVariants}
        />
        <motion.div
          className="w-8 h-8 bg-white rounded-full mx-2"
          variants={circleVariants}
        />
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
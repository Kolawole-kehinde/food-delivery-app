
import React from 'react';
import { motion } from 'framer-motion';

const animationPresets = {
  fadeInUp: {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' },
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -40 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: 'easeOut' },
  },
  fadeInRight: {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: 'easeOut' },
  },
  zoomIn: {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.6 },
  },
};

const MotionWrapper = ({ children, type = 'fadeInUp', className = '' }) => {
  const preset = animationPresets[type] || animationPresets.fadeInUp;
  return (
    <motion.div
      className={className}
      initial={preset.initial}
      animate={preset.animate}
      transition={preset.transition}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;

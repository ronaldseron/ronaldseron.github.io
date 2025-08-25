import { motion } from 'framer-motion';

// Custom hook for scroll animations
export const useScrollAnimation = (options = {}) => {
  const {
    delay = 0,
    duration = 0.6,
    yOffset = 30,
    staggerDelay = 0.1,
    ease = "easeOut",
    amount = 0.2,
    once = true
  } = options;

  const animationProps = {
    initial: { 
      opacity: 0, 
      y: yOffset
    },
    whileInView: { 
      opacity: 1, 
      y: 0
    },
    transition: {
      duration,
      delay,
      ease
    },
    viewport: { 
      once, 
      amount
    }
  };

  return animationProps;
};

// Pre-configured animation variants
export const scrollAnimations = {
  // For individual items
  item: (index = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: {
      duration: 0.6,
      delay: index * 0.1,
      ease: "easeOut"
    },
    viewport: { once: true, amount: 0.2 }
  }),

  // For containers with staggered children
  container: {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    },
    viewport: { once: true, amount: 0.2 }
  },

  // For cards/projects
  card: (index = 0) => ({
    initial: { opacity: 0, y: 40, scale: 0.95 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    transition: {
      duration: 0.7,
      delay: index * 0.15,
      ease: [0.25, 0.46, 0.45, 0.94]
    },
    viewport: { once: true, amount: 0.15 }
  }),

// For cards with hover effects
hoverCard: (index = 0, hoveredIndex = null) => ({
  initial: { opacity: 0, y: 40, scale: 0.95 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  animate: {
    scale: hoveredIndex === null ? 1 : hoveredIndex === index ? 1.05 : 0.95,
    opacity: hoveredIndex === null ? 1 : hoveredIndex === index ? 1 : 0.7,
  },
  transition: {
    duration: 0.3,
    ease: "easeOut",
    delay: hoveredIndex === null ? index * 0.15 : 0, // Only delay for initial scroll animation
  },
  viewport: { once: true, amount: 0.15 }
}),

  // For text elements
  text: (index = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: {
      duration: 0.5,
      delay: index * 0.05,
      ease: "easeOut"
    },
    viewport: { once: true, amount: 0.3 }
  })
};
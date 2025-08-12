export const heroImageContainerVariants = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.7,
    },
  },
};

export const heroImageVariants = {
  initial: { scale: "110%" },
  animate: {
    scale: "100%",
    transition: {
      duration: 1.5,
      ease: [0.25, 0.86, 0.45, 0.98],
      delay: 0.7,
    },
  },
};

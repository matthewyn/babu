export const globalVariants = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.455, 0.03, 0.515, 0.955],
      y: {
        duration: 0.7,
      },
      opacity: {
        duration: 0.9,
      },
    },
  },
};

export const opacityVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      ease: [0.47, 0.01, 0.4, 0.99],
    },
  },
};

export const textColorVariants = {
  hidden: {
    backgroundImage: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%)",
    backgroundPositionX: "50%",
  },
  visible: {
    backgroundImage: "linear-gradient(90deg, rgba(0,128,0,1) 0%, rgba(0,128,0,1) 100%)",
    backgroundPositionX: "225%",
    transition: {
      duration: 2,
      ease: "linear",
    },
  },
};

export const slidingLayoutInVariants = {
  hidden: {
    x: `50vw`,
  },
  visible: {
    x: 0,
    transition: {
      duration: 1.5,
      ease: [0.47, 0.01, 0.4, 0.99],
      delay: 0.1,
    },
  },
  exit: {
    x: `100vw`,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const slidingLayoutOutVariants = {
  hidden: (direction: boolean) => ({
    x: direction ? `-50vw` : 0,
  }),
  visible: {
    x: 0,
    transition: {
      duration: 1.5,
      ease: [0.47, 0.01, 0.4, 0.99],
      delay: 0.1,
    },
  },
  exit: {
    x: `-100vw`,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

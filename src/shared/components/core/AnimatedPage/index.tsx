import React from "react";
import { motion } from "framer-motion";

const animations = {
  initial: {
    opacity: 0,
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
  },
  animate: {
    opacity: 1,
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
  },
  exit: {
    opacity: 0,
    clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
  },
};

type Props = {
  children: React.ReactNode;
};

const AnimatedPage = ({ children }: Props) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 1 }}
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;

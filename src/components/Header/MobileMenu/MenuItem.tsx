import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type Props ={
    i:string
}

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};


export const MenuItem:React.FC<Props> = ({ i }) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link className="text-placeholder" to={`/Jelly-Belly/${i}`}>{i}</Link>
    </motion.li>
  );
};

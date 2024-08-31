"use client";

import { motion } from "framer-motion";
import { opacityVariants } from "./variants";

interface TextRevealProps {
  text: string;
  classes?: string;
  margin?: string;
}

export default function TextReveal({ text, classes, margin }: TextRevealProps) {
  const chars = text.split("");

  return (
    <motion.p initial="hidden" whileInView="visible" className={`${classes}`} transition={{ staggerChildren: 0.02 }} viewport={{ once: true, margin: margin }}>
      {chars.map((char) => (
        <motion.span key={char} transition={{ duration: 0.5 }} variants={opacityVariants}>
          {char}
        </motion.span>
      ))}
    </motion.p>
  );
}

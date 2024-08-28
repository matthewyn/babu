"use client";

import { motion } from "framer-motion";
import { opacityVariants } from "./variants";

interface TextRevealProps {
  text: string;
}

export default function TextReveal({ text }: TextRevealProps) {
  const chars = text.split("");

  return (
    <motion.p initial="hidden" whileInView="visible" transition={{ staggerChildren: 0.02 }} viewport={{ once: true }}>
      {chars.map((char) => (
        <motion.span key={char} transition={{ duration: 0.5 }} variants={opacityVariants}>
          {char}
        </motion.span>
      ))}
    </motion.p>
  );
}

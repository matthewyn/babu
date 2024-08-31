import { motion } from "framer-motion";

interface TextWavyProps {
  text: string;
}

export default function TextWavy({ text }: TextWavyProps) {
  return (
    <>
      {" "}
      <motion.span className="wavy-text" initial={{ backgroundSize: "0% 0.2em" }} whileInView={{ backgroundSize: "100% 0.2em" }} viewport={{ once: true }}>
        {text}
      </motion.span>{" "}
    </>
  );
}

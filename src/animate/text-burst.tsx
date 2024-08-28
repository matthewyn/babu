import { motion } from "framer-motion";

interface TextBurstProps {
  text: string;
}

export default function TextBurst({ text }: TextBurstProps) {
  return (
    <>
      {" "}
      <motion.span className="burst-text bg-center" initial={{ backgroundSize: "0% 0%" }} whileInView={{ backgroundSize: "100% 100%" }} viewport={{ once: true }}>
        {text}
      </motion.span>{" "}
    </>
  );
}

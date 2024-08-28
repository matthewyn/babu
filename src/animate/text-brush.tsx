import { motion } from "framer-motion";

interface TextBrushProps {
  text: string;
}

export default function TextBrush({ text }: TextBrushProps) {
  return (
    <>
      {" "}
      <motion.span className="underlined-text" initial={{ backgroundSize: "0% 90%" }} whileInView={{ backgroundSize: "100% 90%" }} viewport={{ once: true }}>
        {text}
      </motion.span>{" "}
    </>
  );
}

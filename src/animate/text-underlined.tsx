import { motion } from "framer-motion";

interface TextUnderlinedProps {
  text: string;
}

export default function TextUnderlined({ text }: TextUnderlinedProps) {
  return (
    <>
      {" "}
      <motion.span className="underlined-text" initial={{ backgroundSize: "0% 0.2em" }} animate={{ backgroundSize: "100% 0.2em" }}>
        {text}
      </motion.span>{" "}
    </>
  );
}

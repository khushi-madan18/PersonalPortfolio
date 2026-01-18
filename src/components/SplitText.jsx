import { motion } from 'framer-motion';

const SplitText = ({ text, className = "", delay = 0, direction = "up", textAlign = "center" }) => {
  const letters = text.split("");

  const yOffset = direction === "down" ? -30 : 20;
  
  const justifyMap = {
      "center": "center",
      "left": "flex-start",
      "right": "flex-end"
  };

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: yOffset,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap", justifyContent: justifyMap[textAlign] || "center" }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index} style={{ display: 'inline-block' }}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default SplitText;

//! Variants - define one object and passing in motion.anyTag , so we can pass same animation on diff. tag ,so the code is more cleaner

import { motion } from "motion/react";
// Variants help organize animation states
const boxVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 2,
      delay: 0.2,
      ease: "easeOut",
    },
  },
};

const boxVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

<motion.div
  variants={boxVariants}
  initial="hidden"
  animate="visible"
  transition={{ duration: 0.5 }}
>
  Box with Variants
</motion.div>;

function VariantsForCleanerCode() {
  return (
    <>
      <h1>Variants for cleaner code and Reusability</h1>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={boxVariants}
        style={{
          width: 100,
          height: 100,
          backgroundColor: "red",
          borderRadius: "10px",
        }}
      />
      <br />
      <motion.div
        variants={boxVariant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
      >
        Box with Variants
      </motion.div>

      <br />
    </>
  );
}

export default VariantsForCleanerCode;

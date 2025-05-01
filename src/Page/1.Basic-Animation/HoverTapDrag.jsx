import { motion } from "motion/react";

const buttonVariants = {
  hover: {
    scale: 1.1,
    boxShadow: "0px 0px 8px rgba(0,0,0,0.3)",
    transition: {
      duration: 0.3,
      yoyo: Infinity, // Creates a repeating animation (works with any number for repeat count)
    },
  },
  tap: {
    scale: 0.9,
  },
};

const HoverTapDrag = () => {
  return (
    <>
      <h1>Hover and Tap</h1>
      <motion.button
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        style={{
          padding: "10px 20px",
          backgroundColor: "purple",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Click Me
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          marginTop: "20px",
        }}
      >
        Click Me
      </motion.button>

      <br />
    </>
  );
};

export default HoverTapDrag;

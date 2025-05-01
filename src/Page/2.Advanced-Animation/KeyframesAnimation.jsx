import { motion } from "motion/react";

const KeyframesAnimation = () => {
  return (
    <>
      <h1>Key Frames Animation</h1>
      <motion.div
        animate={{
          scale: [1, 1.2, 1.2, 1, 1], // Keyframes array
          rotate: [0, 0, 270, 270, 0], // Rotate through these values
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1], // Timing for each keyframe
          repeat: Infinity,
          repeatDelay: 1,
        }}
        style={{
          width: 100,
          height: 100,
          backgroundColor: "orange",
        }}
      />
    </>
  );
};

export default KeyframesAnimation;

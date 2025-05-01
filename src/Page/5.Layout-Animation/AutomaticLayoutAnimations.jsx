import { motion } from "motion/react";
import { useState } from "react";

function AutomaticLayoutAnimation() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <h1>Automatic Layout Animations</h1>
      <motion.div
        layout // Enable layout animation
        onClick={() => setIsExpanded(!isExpanded)}
        style={{
          width: isExpanded ? 200 : 100,
          height: isExpanded ? 200 : 100,
          backgroundColor: "pink",
          borderRadius: "10px",
          cursor: "pointer",
        }}
        transition={{
          type: "spring", // Spring animation for natural motion
          damping: 10, // Controls bounce
          stiffness: 100, // Controls speed
        }}
      >
        <motion.h2 layout="position">Click Me</motion.h2>
      </motion.div>
    </>
  );
}

export default AutomaticLayoutAnimation;

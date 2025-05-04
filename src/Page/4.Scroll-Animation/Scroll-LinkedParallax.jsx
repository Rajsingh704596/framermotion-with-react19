import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

function ParallaxComponent() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], // Different from previous example
  });

  // useTransform hook use scroll base parallax effect apply
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div ref={ref} style={{ height: "100vh", overflow: "hidden" }}>
      <motion.div
        style={{
          y,
          width: "100%",
          height: "100%",
          background: "linear-gradient(45deg, #ff9a9e, #fad0c4)",
        }}
      >
        <h1 style={{ padding: "20px", color: "white" }}>Scroll Down</h1>
      </motion.div>
    </div>
  );
}

export default ParallaxComponent;

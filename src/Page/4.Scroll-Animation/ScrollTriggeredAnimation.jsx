import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const ScrollTriggeredAnimation = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Animation starts when element enters viewport, ends when it leaves
  });

  // Transform scroll progress into different values
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1.5]);
  return (
    <div>
      <h1>Scroll-Triggered Animation</h1>
      <div style={{ height: "150vh", paddingTop: "50vh" }}>
        <motion.div
          ref={ref}
          style={{
            opacity,
            scale,
            width: 100,
            height: 100,
            backgroundColor: "violet",
          }}
        />
      </div>
      <ScrollBasedAnim />
    </div>
  );
};

export default ScrollTriggeredAnimation;

// another example

import { useInView } from "motion/react";

export const ScrollBasedAnim = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <>
      <motion.div
        ref={ref}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
        transition={{ duration: 0.5 }}
      >
        Scroll Animation
      </motion.div>
    </>
  );
};

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const IntersectionObserver = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Only trigger once
  return (
    <div>
      <h1>While In View (Intersection Observer)</h1>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        style={{
          width: 100,
          height: 100,
          backgroundColor: "teal",
          margin: "50px 0",
        }}
      />
    </div>
  );
};

export default IntersectionObserver;

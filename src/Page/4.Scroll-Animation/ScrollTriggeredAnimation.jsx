import { motion, useScroll, useTransform } from "motion/react"; //motion hooks use
// import { useMotionTemplate } from "motion/react";
import { useRef } from "react";

const ScrollTriggeredAnimation = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref, // here ref pass for which tag we want scroll value in motion which is b/w 0 to 1
    offset: ["start end", "end start"], // Animation starts when element enters viewport, ends when it leaves   // element(tag)=start , viewport=end --- it means i want the scroll tracking to start to end of particular element in viewport when scroll(bottom to top direction / top to bottom direction)
  });

  //^ Transform scroll progress into different values
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]); // keyframes use [0 se 0.5 or 1 pr jb bhi scroll bar aa ye][to opacity apply ho ussi sequence m ]
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1.5]);
  // here we can add more animation like blur..
  //  const blur = useTransform(scrollYProgress,[0.5,1],[0,10]);

  return (
    <div>
      <h1>Scroll-Triggered Animation</h1>
      <div style={{ height: "150vh", paddingTop: "50vh" }}>
        <motion.div
          ref={ref}
          style={{
            opacity,
            scale,
            // filter:useMotionTemplate`blur($(blur)px)`,
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

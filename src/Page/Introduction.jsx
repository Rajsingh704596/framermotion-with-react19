import { motion, useScroll } from "motion/react";

const Introduction = () => {
  console.log(useScroll()); //o/p- {scrollX: MotionValue, scrollY: MotionValue, scrollXProgress: MotionValue, scrollYProgress: MotionValue}
  const scrollYProgress = useScroll().scrollYProgress;

  console.log(scrollYProgress);

  return (
    <>
      {/* Advance part- scroll bar */}
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
        }}
        className="line"
      ></motion.div>
      <div>
        <h1>Basic Animation</h1>
        <ol>
          <li>Motion component ( motion.div, motion.img etc.)</li>
          <li>Animate Props ( "initial" , "animate", "exit")</li>
          <li>Simple Transition</li>

          {/* box apply animate and transition */}
          <motion.div
            className="box"
            animate={{ x: 1000, rotate: 360 }} // x axis
            transition={{ duration: 3, delay: 1 }}
          ></motion.div>

          {/* Circle apply animate and transition*/}
          <motion.div
            className="circle"
            animate={{ y: 100 }}
            transition={{ duration: 4 }}
          ></motion.div>

          <hr />

          {/* Initial Step and last step apply in Text */}
          <motion.h1
            initial={{ x: 500 }} // Initial Position
            animate={{ x: 1000 }} // Animation state (final position)
            transition={{ duration: 2, repeat: Infinity, ease: "anticipate" }} // Transition settings
          >
            Hello World
          </motion.h1>

          <hr />

          {/* Basic Simple Animation using  */}
          <motion.h1
            initial={{ opacity: 0 }} // Initial state (hidden)
            animate={{ opacity: 1 }} // Animation state (visible)
            transition={{ duration: 1, delay: 1 }} // Transition settings
          >
            Simple animation
          </motion.h1>

          <li>Creating Using Variants</li>
        </ol>
        <hr />

        <h1>Advance Animation</h1>
        <ol>
          <li>Using KeyFrames</li>
          <motion.div
            className="box"
            animate={{
              x: [0, 800, 800, 0, 0],
              y: [0, 0, 500, 500, 0],
              rotate: [0, 360, 0, -360, 0],
            }}
            transition={{ duration: 4, delay: 2 }}
          ></motion.div>

          <li>Hover and Tap animation</li>
          <motion.div
            className="box"
            whileHover={{ backgroundColor: "red" }}
            whileTap={{ scale: 0.8 }}
          ></motion.div>

          <li>Drag animation</li>
          <motion.div
            className="box"
            drag
            whileDrag={{ scale: 0.8 }}
            dragConstraints={{ left: 0, top: 0, right: 500, bottom: 100 }} //drag limitation
            dragDirectionLock="true" // one direction drag at a time x or y axis
          ></motion.div>

          <li>Staggering animation</li>
          <li>Sequencing animation</li>
        </ol>

        <h1>Advance Concept</h1>
        <ol>
          <li>Scrolling animation('useScroll', parallax effect)</li>

          <li>Animating Layout</li>
          <li>Using `AnimatePresence`</li>
          <li>Creating Custom animation hooks</li>
        </ol>
      </div>
    </>
  );
};

export default Introduction;

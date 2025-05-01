import { motion } from "motion/react";

function SimpleAnimation() {
  return (
    <div>
      <div className="app">
        {/* 
        'motion' components are the foundation of Framer Motion
        They work like regular React components but have animation capabilities
      */}
        <h1>Basic animation Fade In/Out</h1>
        <motion.div
          initial={{ opacity: 0 }} // Initial state (hidden)
          animate={{ opacity: 1 }} // Animation state (visible)
          transition={{ duration: 2 }} // Transition settings
          style={{
            width: 100,
            height: 100,
            backgroundColor: "blue",
            borderRadius: "10px",
          }}
        />
        <br />
        <div style={{ textAlign: "center", marginTop: "100px" }}>
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hello Framer Motion!
          </motion.h1>
          {/* Explanation:
initial → shuruat ki state

animate → final state jahan pahuchna hai

transition → duration, easing etc. */}
        </div>
      </div>
    </div>
  );
}

export default SimpleAnimation;

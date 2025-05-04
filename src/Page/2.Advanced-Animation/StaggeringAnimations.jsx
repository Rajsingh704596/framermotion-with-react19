//!  Animation Orchestration :- here using variants and staggering apply(jo ek k baad ek aata hai animation children k liye)
//@  Note- staggerChildren always apply parent div , for his children animation show  like map loop time ul pr variant k through stagger effect apply so all li child uss animation pr based honge

//# Orchestration - it means outer div pr hover kar rhe hai to inner div pr animation hota hai

import { motion } from "motion/react";
const StaggeringAnimations = () => {
  // variants define
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        // Stagger children animations by 0.5s
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div>
      <h1>Orchestration(Staggering Animations)</h1>
      <motion.ul
        variants={container}
        initial="hidden"
        animate="visible"
        style={{ listStyle: "none", padding: 0 }}
      >
        {[1, 2, 3, 4].map((index) => (
          <motion.li
            key={index}
            variants={item}
            style={{
              padding: "10px",
              margin: "5px 0",
              backgroundColor: "lightblue",
            }}
          >
            Item {index}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default StaggeringAnimations;

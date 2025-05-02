import { motion } from "motion/react";
const StaggeringAnimations = () => {
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

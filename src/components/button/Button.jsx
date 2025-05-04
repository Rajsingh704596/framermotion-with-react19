import { motion } from "motion/react";
const Button = () => {
  return (
    <>
      <h1>Tailwind+Motion Button</h1>

      <motion.button
        whileHover={{
          rotateX: 25,
          rotateY: 10,
          boxShadow: "0px 20px 50px rgba(8,112,184,1)",
          y: 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        whileTap={{
          y: 5,
        }}
        style={{ translateZ: 100 }}
        className="group w-20  h-10 rounded-lg bg-neutral-800 text-neutral-400 border-b border-cyan-500/40 hover:border-cyan-400 transition-colors duration-300"
      >
        <span className="group-hover:text-cyan-400 transition-colors duration-300">
          Button
        </span>
      </motion.button>
    </>
  );
};

export default Button;

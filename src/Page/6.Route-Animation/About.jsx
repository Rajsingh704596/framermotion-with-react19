import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.5 }}
    >
      <h1>About Page</h1>
    </motion.div>
  );
}

export default About;

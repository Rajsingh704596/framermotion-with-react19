import { motion } from "motion/react";

const Image = () => {
  return (
    <div>
      <h1> Image while In View animation</h1>
      <hr />
      <div className="grid grid-cols-2 gap-5 m-2 p-2">
        <motion.img
          src="/vite.svg"
          alt="image1"
          width={400}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }} // jb jb view pr aaygi animation apply
          transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
        />

        <motion.img
          src="src\assets\react.svg"
          alt="image2"
          width={400}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.75, ease: "easeInOut" }}
        />

        <motion.img
          src="/vite.svg"
          alt="image1"
          width={400}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true }} // animation only one time apply , ek baar viewport pr aane k baad animation dubara nhi dikhega
        />

        <motion.img
          src="src\assets\react.svg"
          alt="image2"
          width={400}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.75, ease: "easeOut" }}
          viewport={{ once: true }}
        />

        <motion.img
          src="src\assets\react.svg"
          alt="image2"
          width={400}
          initial={{ x: -100, y: 50 }}
          whileInView={{ x: 0, y: 0 }}
          transition={{ duration: 0.5, delay: 0.75, ease: "easeOut" }}
        />

        <motion.img
          src="/vite.svg"
          alt="image1"
          width={400}
          initial={{ x: 100, y: 100 }}
          whileInView={{ x: 0, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
        />

        <motion.img
          src="src\assets\react.svg"
          alt="image2"
          width={400}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
        />

        <motion.img
          src="src\assets\react.svg"
          alt="image2"
          width={400}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.75, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default Image;

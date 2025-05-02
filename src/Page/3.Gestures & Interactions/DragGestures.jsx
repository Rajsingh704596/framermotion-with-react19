import { motion } from "motion/react";
const DragGestures = () => {
  return (
    <>
      <h1>Draggable Component</h1>
      <motion.div
        drag // Enables dragging
        dragConstraints={{
          // Constraints for dragging
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
        dragElastic={0.2} // How much the element can move outside constraints(limitation boundary) //0-no movement, 1-full movement
        whileDrag={{
          // Animation while dragging
          scale: 1.1,
          boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
          backgroundColor: "skyblue",
        }}
        style={{
          width: 100,
          height: 100,
          backgroundColor: "green",
          borderRadius: "10px",
          cursor: "grab",
        }}
      />
      {/* another example */}

      <motion.div
        drag
        dragConstraints={{ left: -100, right: 100, top: -50, bottom: 50 }}
        style={{ width: 100, height: 100, backgroundColor: "red" }}
        dragSnapToOrigin={true} // draggable element back to it's origin
        dragTransition={{ bounceStiffness: 500, bounceDamping: 10 }} //after release bounce animation
      />
    </>
  );
};

export default DragGestures;

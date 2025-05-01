import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

function SharedElementTransition() {
  const [selectedId, setSelectedId] = useState(null);
  const items = ["Item 1", "Item 2", "Item 3"];

  return (
    <>
      <h1> LayoutId for Shared Element Transitions</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        {items.map((item) => (
          <motion.div
            key={item}
            layoutId={item}
            onClick={() => setSelectedId(item)}
            style={{
              width: 100,
              height: 100,
              backgroundColor: "lightgreen",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            <motion.h5>{item}</motion.h5>
          </motion.div>
        ))}

        <AnimatePresence>
          {selectedId && (
            <motion.div
              layoutId={selectedId}
              onClick={() => setSelectedId(null)}
              style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 300,
                height: 300,
                backgroundColor: "lightgreen",
                borderRadius: "20px",
                cursor: "pointer",
              }}
            >
              <motion.h2>{selectedId}</motion.h2>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default SharedElementTransition;

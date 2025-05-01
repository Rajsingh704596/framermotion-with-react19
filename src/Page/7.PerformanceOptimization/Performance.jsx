import {
  motion,
  useMotionValue,
  useTransform,
  useMotionValueEvent,
} from "motion/react";

function PerformanceOptimizedComponent() {
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0]);

  // Using useMotionValueEvent to subscribe to the "change" event
  useMotionValueEvent(x, "change", (latest) => {
    console.log("x changed to:", latest); // Avoids triggering React re-renders
  });

  return (
    <motion.div
      drag="x"
      style={{ x, opacity, width: 100, height: 100, backgroundColor: "gold" }}
    />
  );
}

export default PerformanceOptimizedComponent;

// Why Use useMotionValueEvent?
// Performance: It prevents unnecessary React re-renders by subscribing to motion value events outside the React rendering cycle.

// Compatibility: Fully supported in Motion v11 and aligns with the latest API standards.

// Event Handling: Allows you to listen to events such as "change", "animationStart", "animationComplete", and "animationCancel" on motion values

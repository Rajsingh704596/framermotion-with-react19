const OptimizingAnimation = () => {
  return (
    <div>
      {/* 1. Use will-change CSS property: */}
      <motion.div style={{ willChange: "transform, opacity" }} />

      {/*2.  Prefer transform properties (x, y, scale, rotate) over layout properties (width, height, padding, margin): */}
      {/* Good (GPU accelerated) */}
      <motion.div animate={{ x: 100, scale: 1.2 }} />

      {/* Bad (triggers layout recalculations) */}
      <motion.div animate={{ left: "100px", width: "120%" }} />

      {/* 3.Reduce the number of animated properties: */}
      {/* Better to animate only what's necessary */}
      <motion.div animate={{ opacity: 1 }} />

      {/* 4.Use AnimatePresence for mount/unmount animations instead of conditional rendering with CSS. */}
    </div>
  );
};

export default OptimizingAnimation;

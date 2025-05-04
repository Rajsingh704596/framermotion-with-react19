import React from "react";

const ScrollColorChange = () => {
  return (
    <div>
      ScrollColorChange
      <ColorScroller />
      {/* <ColorScroller2 /> */}
    </div>
  );
};

export default ScrollColorChange;

// one component
import { useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

const COLORS = [
  "#243B55",
  "#EF629F",
  "#004e92",
  "#41295a",
  "#A770EF",
  "#8F87F1",
];

export function ColorScroller() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const [colorIndex, setColorIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const index = Math.min(
      Math.floor(progress * COLORS.length),
      COLORS.length - 1
    );
    setColorIndex(index);
  });

  return (
    <div
      ref={containerRef}
      style={{
        background: COLORS[colorIndex],
        transition: "background 0.3s ease-in-out",
      }}
    >
      <div style={{ height: `${COLORS.length * 100}vh` }}>
        {COLORS.map((_, i) => (
          <Section key={i} active={i === colorIndex} index={i} />
        ))}
      </div>
    </div>
  );
}

function Section({ active, index }) {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        opacity: active ? 1 : 0.3,
        transition: "opacity 0.3s ease",
        fontSize: "2rem",
        fontWeight: "bold",
      }}
    >
      Color {index + 1}
      {index < COLORS.length - 1 && (
        <div style={{ fontSize: "1rem", marginTop: "0.5rem" }}>↓</div>
      )}
    </div>
  );
}

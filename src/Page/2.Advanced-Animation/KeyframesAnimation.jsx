import { motion } from "motion/react";

const KeyframesAnimation = () => {
  return (
    <>
      <h1>Key Frames Animation</h1>
      <motion.div
        animate={{
          scale: [1, 1.2, 1.2, 1, 1], // Keyframes array
          rotate: [0, 0, 270, 270, 0], // Rotate through these values
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1], // Timing for each keyframe
          repeat: Infinity,
          repeatDelay: 1,
        }}
        style={{
          width: 100,
          height: 100,
          backgroundColor: "orange",
        }}
      />

      <br />
      {/* another example */}
      <IndustryStandardLoader />

      <br />
      <PremiumBackgroundAnimation />

      <br />
      <WaveGradientBackground />
    </>
  );
};

export default KeyframesAnimation;

// Loader
const IndustryStandardLoader = () => {
  return (
    <motion.div
      style={{
        width: 40,
        height: 40,
        borderRadius: "50%",
        border: "3px solid rgba(59, 130, 246, 0.2)",
        borderTopColor: "#3b82f6",
      }}
      initial={{ opacity: 0.6 }}
      animate={{
        opacity: 1,
        rotate: 360,
        scale: [1, 1.1, 1], // Subtle pulse effect
      }}
      transition={{
        rotate: {
          duration: 1,
          ease: "linear",
          repeat: Infinity,
        },
        scale: {
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        },
      }}
    />
  );
};

//Premium Background Animation

const PremiumBackgroundAnimation = () => {
  return (
    <div style={{ position: "relative", overflow: "hidden", height: "100vh" }}>
      {/* Gradient Background */}
      <motion.div
        style={{
          position: "absolute",
          width: "200%",
          height: "200%",
          background: `
        radial-gradient(circle at 75% 25%, 
        rgba(255,0,128,0.8) 0%, 
        rgba(0,100,255,0.6) 100%)
      `,
        }}
        animate={{
          x: [0, -1000, 0],
          y: [0, -500, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 27,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            background: "rgba(255,255,255,0.7)",
            borderRadius: "50%",
            width: Math.random() * 10 + 5,
            height: Math.random() * 10 + 5,
          }}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
          }}
          animate={{
            y: [0, -window.innerHeight * 0.5],
            opacity: [0, 0.8, 0],
            scale: [1, 1.5],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
};

// Wave Gradient Background with floating particle
const WaveGradientBackground = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Background Animation */}
      <motion.div
        style={{
          position: "absolute", // Changed from fixed to absolute
          width: "100%",
          height: "100%",
          background: `
            linear-gradient(-45deg, 
            #6ee7b7, #3b82f6, #9333ea, #ec4899)`,
          backgroundSize: "400% 400%",
          // special effects:
          filter: "blur(1px) contrast(120%)", // Liquid metal effect
          zIndex: 0, // Ensure it stays behind content
          willChange: "transform, opacity", // ← Add this for mobile optimization
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 12,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              background: "rgba(255,255,255,0.3)",
              borderRadius: "50%",
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              willChange: "transform, opacity", // ← Also for particles
            }}
            initial={{
              x: `${Math.random() * 100}vw`,
              y: `${Math.random() * 100}vh`,
            }}
            animate={{
              x: `${Math.random() * 100}vw`,
              y: `${Math.random() * 100}vh`,
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </motion.div>

      {/* Your Content Goes Here - will appear above the background */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Your application content */}
        <h1>Your App Content</h1>
        <p>This will appear above the animated background</p>
      </div>
    </div>
  );
};

// Color Palettes (Trending in Figma/Sketch):
// Neon Cyberpunk
// #a5b4fc → #f472b6 → #60a5fa → #34d399

// Deep Ocean
// #0891b2 → #1e40af → #7e22ce → #db2777

// Sunset Luxe
// #f59e0b → #ef4444 → #8b5cf6 → #10b981

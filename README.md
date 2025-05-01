
```markdown
# 🚀 Ultimate Framer Motion v11 + React 19 Master Guide

*Complete reference with 100% motion.dev coverage + hidden features, performance optimizations, and React 19 patterns*

```jsx
// 📚 Mega Table of Contents
1. [Quick Setup](#-quick-setup-2025)
2. [Core Animation System](#-core-animation-system)
3. [Component Animations](#-component-animations)
4. [Advanced Motion Techniques](#-advanced-motion-techniques)  
5. [React 19 Integration](#-react-19-integration)
6. [Performance Masterclass](#-performance-masterclass)
7. [TypeScript Deep Dive](#-typescript-deep-dive)
8. [Complete API Dictionary](#-complete-api-dictionary)
9. [Production Checklist](#-production-checklist)
10. [Troubleshooting Guide](#-troubleshooting-guide)
11. [Pro Secrets](#-pro-secrets)
```

---

## 🛠 Quick Setup (2025)

### 1. Modern Installation
```bash
# Create React 19 app (May 2025)
npm create vite@latest my-app --template react-ts
cd my-app

# Install Motion v11 (now called 'motion' package)
npm install motion

# For legacy projects still using 'framer-motion':
npm install framer-motion@11.2.5
```

### 2. Basic Component
```jsx
// App.tsx
import { motion } from 'motion'; // or 'framer-motion'

export default function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      Hello Motion!
    </motion.div>
  );
}
```

### 3. Project Structure (2025 Best Practice)
```
/src
  /components
    /animated
      Button.tsx  # Animated components
      Modal.tsx
  /hooks
    useScrollAnimation.ts # Custom motion hooks
  /styles
    motionVariants.ts # Shared animation presets
```

---

## 🌟 Core Animation System

### 1. Animation Props Deep Dive
| Prop | Type | Description | Example |
|------|------|-------------|---------|
| `initial` | object/string | Starting values/variant | `initial={{ x: -100 }}` |
| `animate` | object/string | Target values/variant | `animate="visible"` |
| `exit` | object/string | Unmount animation | `exit={{ opacity: 0 }}` |
| `transition` | object | Animation configuration | `transition={{ type: "spring" }}` |
| `variants` | object | Predefined states | `variants={fadeVariant}` |
| `custom` | any | Dynamic variant data | `custom={index}` |

### 2. Transition Types Explained
```jsx
// 1. Spring (default)
transition={{ 
  type: "spring",
  stiffness: 100, // 0-1000 (how strong the spring is)
  damping: 10,    // 0-100 (how bouncy)
  mass: 1,        // 0.1-10 (weight of object)
  restDelta: 0.01 // When to stop (precision)
}}

// 2. Tween (simple duration)
transition={{
  type: "tween",
  duration: 0.8,
  ease: [0.17, 0.67, 0.83, 0.67] // Cubic bezier
}}

// 3. Inertia (physics-based)
transition={{ 
  type: "inertia",
  velocity: 50, // Initial speed
  power: 0.2,   // Force multiplier
  timeConstant: 750 // How quickly to slow down
}}
```

### 3. Variant Patterns
```jsx
// 1. Basic variant
const fadeVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

// 2. Staggered children
const listVariant = {
  visible: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1 // Reverse order
    }
  }
}

// 3. Dynamic variants
const dynamicVariant = {
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1 }
  })
}
```

---

## 🧩 Component Animations

### 1. Layout Animations (2025 Update)
```jsx
// 1. Basic layout (size/position)
<motion.div layout />

// 2. Specific layout types
<motion.div layout="position" /> // Only position
<motion.div layout="size" />     // Only size

// 3. LayoutGroup synchronization
<LayoutGroup>
  <motion.div layoutId="item-1" />
  <motion.div layoutId="item-2" />
</LayoutGroup>

// 4. Shared element transitions
<AnimateSharedLayout>
  {items.map(item => (
    <motion.div key={item.id} layoutId={item.id} />
  ))}
</AnimateSharedLayout>
```

### 2. Gesture Interactions
```jsx
// 1. Drag with constraints
<motion.div
  drag
  dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
  dragElastic={0.5} // 0-1 (how much it can go beyond constraints)
  dragMomentum={false} // Disable momentum after release
/>

// 2. Advanced drag (2025 pattern)
<motion.div
  drag="x" // Only horizontal
  dragTransition={{ 
    bounceStiffness: 600,
    bounceDamping: 10,
    min: 0,       // Minimum bound
    max: 100      // Maximum bound
  }}
  onDragStart={() => console.log("Drag started")}
  onDragEnd={() => console.log("Drag ended")}
/>

// 3. Hover/Tap states
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  whileFocus={{ boxShadow: "0 0 0 3px #555" }}
/>
```

---

## ⚡ Performance Masterclass

### 1. Optimization Techniques
```jsx
// 1. Lazy loading (critical for production)
import { LazyMotion, domAnimation, m } from 'motion';

function OptimizedComponent() {
  return (
    <LazyMotion features={domAnimation}>
      <m.div animate={{ x: 100 }} />
    </LazyMotion>
  );
}

// 2. Optimized properties (GPU accelerated)
animate={{ 
  x: 100,       // ✅ Good (transform)
  y: 50,        // ✅ Good 
  opacity: 0.5, // ✅ Good
  scale: 1.2    // ✅ Good
}}

// ❌ Avoid these (cause layout recalculations)
animate={{
  width: "100%",     // ❌ Bad
  padding: "20px",   // ❌ Bad
  margin: "10px",    // ❌ Bad
  top: "50px"        // ❌ Bad
}}

// 3. Will-change hint (advanced)
<motion.div style={{ willChange: "transform" }} />
```

### 2. Reduced Motion (Accessibility)
```jsx
import { MotionConfig, useReducedMotion } from 'motion';

// Component-level
function AccessibleComponent() {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <motion.div
      animate={{
        x: shouldReduceMotion ? 0 : 100 // Fallback
      }}
    />
  );
}

// Global configuration
<MotionConfig reducedMotion="user">
  <App />
</MotionConfig>
```

---

## ⚛ React 19 Integration

### 1. Server Components Pattern
```jsx
// app/components/Animated.tsx
'use client'; // Required for animations

import { motion } from 'motion';

export function AnimatedBox() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    />
  );
}
```

### 2. Action States
```jsx
// Using React 19 Actions
<motion.form
  action={async (formData) => {
    'use server';
    // Handle form submission
  }}
  whileSubmitting={{
    opacity: 0.7,
    transition: { duration: 0.2 }
  }}
/>
```

### 3. Optimistic UI Patterns
```jsx
const [optimisticState, addOptimistic] = useOptimistic(
  state,
  (current, optimisticValue) => ({
    ...current,
    ...optimisticValue,
    isOptimistic: true
  })
);

<motion.div
  animate={optimisticState.isOptimistic ? "pending" : "idle"}
  variants={{
    pending: { y: 5, opacity: 0.6 },
    idle: { y: 0, opacity: 1 }
  }}
/>
```

---

## 📜 Complete API Dictionary

### 1. Components
| Component | Description | 2025 Status |
|-----------|-------------|-------------|
| `<motion.*>` | All HTML/SVG elements | ✅ Current |
| `<AnimatePresence>` | Exit animations | ✅ Current |
| `<AnimateSharedLayout>` | Shared transitions | ⚠️ Legacy (use LayoutGroup) |
| `<LayoutGroup>` | Coordinated layouts | ✅ Recommended |
| `<MotionConfig>` | Global settings | ✅ Current |

### 2. Hooks
| Hook | Description | Performance Impact |
|------|-------------|-------------------|
| `useMotionValue` | Track single value | Low |
| `useTransform` | Value transformations | Medium |
| `useSpring` | Spring-based values | High |
| `useScroll` | Scroll tracking | Medium |
| `useElementScroll` | Element scroll tracking | Medium |
| `useViewportScroll` | Viewport scroll (legacy) | Deprecated |
| `useReducedMotion` | Accessibility check | Low |

### 3. Animation Utilities
| Utility | Description | Use Case |
|---------|-------------|----------|
| `animate()` | Imperative animations | Complex sequences |
| `scroll()` | Programmatic scrolling | Smooth scroll |
| `inView()` | Viewport detection | Lazy loading |
| `stagger()` | Sequence helpers | List animations |

---

## 💎 Pro Secrets (2025)

### 1. Advanced SVG Patterns
```jsx
// 1. Path morphing
<motion.path
  animate={{ d: "M10 10 L90 10 L90 90 L10 90 Z" }}
  transition={{ 
    duration: 1,
    ease: "anticipate" 
  }}
/>

// 2. SVG filter animations
<motion.svg>
  <defs>
    <filter id="noise">
      <feTurbulence type="fractalNoise" />
    </filter>
  </defs>
  <motion.circle
    animate={{ filter: "url(#noise)" }}
  />
</motion.svg>
```

### 2. Scroll-Driven Animations
```jsx
// 1. Advanced scroll linking
const { scrollYProgress } = useScroll();
const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 1]);
const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

// 2. Parallax effect
<motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }} />

// 3. Scroll snap
<motion.section
  onViewportEnter={() => snapToSection()}
  viewport={{ margin: "0px 0px -50% 0px" }}
/>
```

---

## 🏆 Production Checklist

1. **Performance**
   - [ ] Used `LazyMotion`
   - [ ] Animated only `transform`/`opacity`
   - [ ] Limited simultaneous animations
   - [ ] Implemented `useReducedMotion`

2. **React 19**
   - [ ] Added 'use client' where needed
   - [ ] Optimized server components
   - [ ] Used new action states

3. **Animation Quality**
   - [ ] Consistent transition types
   - [ ] Proper variant organization
   - [ ] Meaningful durations (100-300ms for UI)

4. **Accessibility**
   - [ ] Reduced motion support
   - [ ] Focus states
   - [ ] No motion flashes (initial={false})

---
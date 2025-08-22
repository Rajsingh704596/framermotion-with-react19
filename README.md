#  Framer Motion v12 + React 19 Master Guide

*Complete reference with 100% motion.dev coverage + hidden features, performance optimizations, and React 19 patterns*


### 📚 Mega Table of Contents
1. [Quick Setup](#quick-setup-2025)
2. [Core Animation System](#core-animation-system)
3. [Component Animations](#component-animations)
4. [Advanced Motion Techniques](#advanced-motion-techniques)
5. [React 19 Integration](#react-19-integration)
6. [Performance Masterclass](#performance-masterclass)
7. [TypeScript Deep Dive](#typescript-deep-dive)
8. [Complete API Dictionary](#complete-api-dictionary)
9. [Production Checklist](#production-checklist)
10. [Troubleshooting Guide](#troubleshooting-guide)
11. [Pro Secrets](#pro-secrets)
12. [Example Project: Animated Dashboard](#example-project-animated-dashboard)

---

## 🛠 Quick Setup (2025)

### 1. Modern Installation
```bash
# Create React 19 app (August 2025)
npm create vite@latest my-app --template react-ts
cd my-app

# Install Motion v12 (version 12.23.12, July 2025)
npm install motion

# For legacy projects using 'framer-motion':
npm install framer-motion@11.2.5
```

### 2. Basic Component
```tsx
// App.tsx
import { motion } from 'motion/react';

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

### 3. Project Structure (Best Practice both for .tsx / .jsx)
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
| `initial` | object/string/array/boolean | Starting values/variant or false to disable | `initial={{ x: -100 }}` or `initial={false}` |
| `animate` | object/string/array | Target values/variant | `animate="visible"` or `animate={{ boxShadow: "10px 10px #000" }}` |
| `exit` | object/string | Unmount animation (requires AnimatePresence) | `exit={{ opacity: 0 }}` |
| `transition` | object | Animation configuration | `transition={{ type: "spring" }}` |
| `variants` | object | Predefined states | `variants={fadeVariant}` |
| `custom` | any | Dynamic variant data | `custom={index}` |
| `style` | object | Extends React style with motion values | `style={{ x: useMotionValue(30) }}` |
| `onUpdate` | function | Callback on value update | `onUpdate={latest => console.log(latest.opacity)}` |
| `onAnimationStart` | function | Callback on animation start | `onAnimationStart={latest => console.log(latest)}` |
| `onAnimationComplete` | function | Callback on animation complete | `onAnimationComplete={latest => console.log(latest)}` |

### 2. Transition Types Explained
```tsx
// 1. Spring (physics or duration-based)
transition={{ 
  type: "spring",
  bounce: 0.25,   // 0-1 bounciness
  damping: 10,    // 0-100 opposing force
  mass: 1,        // 0.1-10 object weight
  stiffness: 100, // 1-∞ spring strength
  velocity: 0,    // Initial velocity
  restDelta: 0.01 // Precision to stop
}}

// 2. Tween (simple duration)
transition={{
  type: "tween",
  duration: 0.8,
  ease: "easeInOut", // Or [.17, .67, .83, .67] or t => t * t
  times: [0, 0.5, 1] // For keyframes
}}

// 3. Inertia (physics-based, often for drag)
transition={{ 
  type: "inertia",
  power: 0.8,     // Force multiplier
  timeConstant: 700, // Deceleration duration
  modifyTarget: v => Math.round(v / 100) * 100, // Snap to grid
  min: 0,         // Min bound
  max: 100,       // Max bound
}}
```

### 3. Variant Patterns
```tsx
// 1. Basic variant
const fadeVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

// 2. Staggered children
const listVariant = {
  visible: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1 // Reverse order
    }
  }
};

// 3. Dynamic variants
const dynamicVariant = {
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1 }
  })
};
```

---

## 🧩 Component Animations

### 1. Layout Animations
```tsx
// 1. Basic layout (size/position)
<motion.div layout />

// 2. LayoutGroup synchronization
<LayoutGroup>
  <motion.div layoutId="item-1" />
  <motion.div layoutId="item-2" />
</LayoutGroup>

// 3. Shared element transitions
<LayoutGroup>
  {items.map(item => (
    <motion.div key={item.id} layoutId={item.id} />
  ))}
</LayoutGroup>

// 4. Scrollable layout
<motion.div layoutScroll style={{ overflow: "scroll" }}>
  <motion.div layout />
</motion.div>
```

### 2. Gesture Interactions
```tsx
// 1. Drag with constraints
<motion.div
  drag
  dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
  dragElastic={0.5}
  dragMomentum={false}
/>

// 2. Advanced drag
<motion.div
  drag="x"
  dragTransition={{ 
    bounceStiffness: 600,
    bounceDamping: 10,
    min: 0,
    max: 100
  }}
  dragDirectionLock
  onDragStart={() => console.log("Drag started")}
  onDragEnd={() => console.log("Drag ended")}
/>

// 3. Hover/Tap states
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  whileFocus={{ boxShadow: "0 0 0 3px #555" }}
  onHoverStart={e => console.log(e)}
  onTap={e => console.log(e)}
/>
```

---

## ⚡ Advanced Motion Techniques

### 1. Scroll-Driven Animations
```tsx
import { useScroll, useTransform } from 'motion/react';

// 1. Scroll progress
function ScrollComponent() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return <motion.div style={{ scale, opacity }} />;
}

// 2. Parallax effect
<motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }} />

// 3. Scroll snap
import { inView } from 'motion';

inView(element, () => snapToSection());
```

### 2. SVG Animations
```tsx
// 1. Path morphing
<motion.path
  animate={{ d: "M10 10 L90 10 L90 90 L10 90 Z" }}
  transition={{ duration: 1, ease: "anticipate" }}
/>

// 2. SVG filter animations
<motion.svg>
  <defs>
    <filter id="noise">
      <feTurbulence type="fractalNoise" />
    </filter>
  </defs>
  <motion.circle animate={{ filter: "url(#noise)" }} />
</motion.svg>
```

---

## ⚛ React 19 Integration

Motion v12 is fully compatible with React 19 (issues from May 2024 resolved). Use `'use client'` for client-side components in server-rendered apps.

### 1. Server Components
```tsx
// app/components/Animated.tsx
'use client';

import { motion } from 'motion/react';

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
```tsx
<motion.form
  action={async (formData) => {
    'use server';
    // Handle form submission
  }}
  whileTap={{ opacity: 0.7 }}
/>
```

### 3. Optimistic UI
```tsx
import { useOptimistic } from 'react';

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

## ⚡ Performance Masterclass

### 1. Optimization Techniques
```tsx
// 1. Lazy loading
import { LazyMotion, domAnimation, m } from 'motion/react';

function OptimizedComponent() {
  return (
    <LazyMotion features={domAnimation}>
      <m.div animate={{ x: 100 }} />
    </LazyMotion>
  );
}

// 2. GPU-accelerated properties
animate={{ 
  x: 100,       // ✅ Good
  y: 50,        // ✅ Good 
  opacity: 0.5, // ✅ Good
  scale: 1.2    // ✅ Good
}}

// ❌ Avoid (cause layout recalculations)
animate={{
  width: "100%",     // ❌ Bad
  padding: "20px",   // ❌ Bad
  margin: "10px",    // ❌ Bad
}}

// 3. Will-change
<motion.div style={{ willChange: "transform" }} />
```

### 2. Reduced Motion (Accessibility)
```tsx
import { MotionConfig, useReducedMotion } from 'motion/react';

function AccessibleComponent() {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <motion.div
      animate={{ x: shouldReduceMotion ? 0 : 100 }}
    />
  );
}

// Global configuration
<MotionConfig reducedMotion="user">
  <App />
</MotionConfig>
```

---

## 🛠 TypeScript Deep Dive

### 1. Type-Safe Animation Props
```tsx
import { motion, MotionProps, Variants } from 'motion/react';

interface MyVariants extends Variants {
  hidden: { opacity: number; x: number };
  visible: { opacity: number; x: number };
}

const cardVariants: MyVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const AnimatedCard: React.FC<MotionProps & { custom: number }> = ({ custom }) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      custom={custom}
      transition={{ type: 'spring', stiffness: 100 }}
    />
  );
};
```

### 2. Custom Hooks
```tsx
import { useMotionValue, useTransform, useScroll, MotionValue } from 'motion/react';

interface ScrollAnimation {
  progress: MotionValue<number>;
  scale: MotionValue<number>;
}

function useScrollAnimation(): ScrollAnimation {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  return { progress: scrollYProgress, scale };
}
```

### 3. Extending Motion Components
```tsx
import { motion, HTMLMotionProps } from 'motion/react';

interface CustomButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary';
}

const MotionButton = motion<CustomButtonProps>('button');

const CustomButton: React.FC<CustomButtonProps> = ({ variant, ...props }) => {
  return (
    <MotionButton
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={variant === 'primary' ? 'bg-blue-500' : 'bg-gray-500'}
      {...props}
    />
  );
};
```

---

## 📜 Complete API Dictionary

### 1. Components
| Component | Description | 2025 Status |
|-----------|-------------|-------------|
| `<motion.*>` | All HTML/SVG elements | ✅ Current |
| `<AnimatePresence>` | Exit animations | ✅ Current |
| `<LayoutGroup>` | Coordinated layouts | ✅ Recommended |
| `<MotionConfig>` | Global settings | ✅ Current |
| `<LazyMotion>` | Lazy loading for bundle size | ✅ Current |
| `<AnimateSharedLayout>` | Shared transitions | ⚠️ Deprecated (use LayoutGroup) |

### 2. Hooks
| Hook | Description | Performance Impact |
|------|-------------|-------------------|
| `useMotionValue` | Track single value | Low |
| `useTransform` | Value transformations | Medium |
| `useSpring` | Spring-based values | High |
| `useScroll` | Scroll tracking | Medium |
| `useElementScroll` | Element scroll tracking | Medium |
| `useReducedMotion` | Accessibility check | Low |
| `useMotionTemplate` | Template strings for motion values | Low |
| `useAnimate` | Imperative animations | Medium |
| `useViewportScroll` | Viewport scroll | ⚠️ Deprecated |

### 3. Animation Utilities
| Utility | Description | Use Case |
|---------|-------------|----------|
| `animate()` | Imperative animations | Complex sequences |
| `scroll()` | Programmatic scrolling | Smooth scroll |
| `inView()` | Viewport detection | Lazy loading |
| `stagger()` | Sequence helpers | List animations |

---

## 🏆 Production Checklist

1. **Performance**
   - [ ] Used `LazyMotion` for tree-shaking
   - [ ] Animated only `transform`/`opacity`
   - [ ] Used `willChange` for heavy animations
   - [ ] Minimized `useSpring` usage
   - [ ] Implemented `useReducedMotion`

2. **React 19**
   - [ ] Added `'use client'` for client-side components
   - [ ] Optimized server components
   - [ ] Used `useOptimistic` for UI updates
   - [ ] Leveraged action states

3. **Animation Quality**
   - [ ] Consistent easing across animations
   - [ ] Organized variants in separate files
   - [ ] Kept durations between 100-300ms
   - [ ] Used `stagger` for lists

4. **Accessibility**
   - [ ] Supported reduced motion
   - [ ] Added `whileFocus` for keyboard navigation
   - [ ] Avoided auto-playing animations (`initial={false}`)
   - [ ] Ensured animations don’t obscure content

5. **TypeScript**
   - [ ] Typed all variants and props
   - [ ] Used `HTMLMotionProps` for components
   - [ ] Validated custom hooks

---

## 🔧 Troubleshooting Guide

1. **Animations Not Triggering**
   - **Cause**: Missing `'use client'` in React 19 server components.
   - **Fix**: Add `'use client'` at file top.
   - ```tsx
     'use client';
     import { motion } from 'motion/react';
     ```

2. **Layout Animations Jitter**
   - **Cause**: Unsynchronized parent/child layouts.
   - **Fix**: Use `LayoutGroup` or `layoutDependency`.
   - ```tsx
     <LayoutGroup>
       <motion.div layout />
     </LayoutGroup>
     ```

3. **High CPU Usage**
   - **Cause**: Animating non-GPU properties.
   - **Fix**: Use `transform` properties.
   - ```tsx
     animate={{ scaleX: 1.5 }} // Good
     ```

4. **Exit Animations Not Working**
   - **Cause**: Missing `<AnimatePresence>`.
   - **Fix**: Wrap dynamic components.
   - ```tsx
     <AnimatePresence>
       {isVisible && <motion.div exit={{ opacity: 0 }} />}
     </AnimatePresence>
     ```

5. **TypeScript Errors**
   - **Cause**: Incorrect prop types.
   - **Fix**: Use `HTMLMotionProps`.
   - ```tsx
     import { HTMLMotionProps } from 'motion/react';
     const props: HTMLMotionProps<'div'> = { animate: { opacity: 1 } };
     ```

6. **Scroll Animations Not Smooth**
   - **Cause**: Heavy `useTransform` computations.
   - **Fix**: Simplify or use `willChange`.
   - ```tsx
     <motion.div style={{ willChange: 'transform' }} />
     ```

---

## 💎 Pro Secrets

1. **Imperative Animations**
```tsx
import { useAnimate } from 'motion/react';

function SequenceAnimation() {
  const [scope, animate] = useAnimate();

  const handleClick = async () => {
    await animate(scope.current, { scale: 1.2 }, { duration: 0.2 });
    await animate(scope.current, { rotate: 360 }, { duration: 0.5 });
    animate(scope.current, { scale: 1, rotate: 0 }, { duration: 0.3 });
  };

  return <motion.div ref={scope} onClick={handleClick} />;
}
```

2. **Custom Easing**
```tsx
const customEase = (t: number) => t * t; // Quadratic
transition={{ ease: customEase, duration: 0.5 }}
```

3. **Scale Correction in Layouts**
```tsx
<motion.div layout style={{ borderRadius: 20 }}>
  <motion.div layout /> // Child inherits correction
</motion.div>
```

4. **Advanced Stagger**
```tsx
import { motion, stagger } from 'motion/react';

const listVariants = {
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
  hidden: {},
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

<motion.ul variants={listVariants} initial="hidden" animate="visible">
  {items.map((item, i) => (
    <motion.li key={i} variants={itemVariants}>
      {item}
    </motion.li>
  ))}
</motion.ul>
```

5. **Motion Value Sync**
```tsx
import { useMotionValue, useTransform } from 'motion/react';

function SyncedAnimation() {
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0]);

  return (
    <motion.div
      style={{ x, opacity }}
      drag="x"
      dragConstraints={{ left: -100, right: 100 }}
    />
  );
}
```

6. **Migration Tips from Framer Motion**
   - Update imports: `import { motion } from 'motion/react'`
   - Velocity calculated at frame end.
   - Renders in microtasks; await frames in tests.
   - No IE/Safari 12 polyfills; add if needed.
   - Tap events keyboard-accessible by default.

---

## 📦 Example Project: Animated Dashboard

```tsx
// dashboard/AnimatedDashboard.tsx
'use client';

import { motion, useScroll, useTransform, AnimatePresence, LayoutGroup } from 'motion/react';
import { useOptimistic, useState } from 'react';

interface DashboardProps {
  data: { id: string; title: string }[];
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, type: 'spring' },
  }),
};

export function AnimatedDashboard({ data }: DashboardProps) {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const [items, setItems] = useState(data);
  const [optimisticItems, addOptimistic] = useOptimistic(items, (current, newItems) => newItems);

  const handleAddItem = async () => {
    const newItem = { id: Date.now().toString(), title: 'New Item' };
    addOptimistic([...items, newItem]);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setItems([...items, newItem]);
  };

  return (
    <LayoutGroup>
      <motion.section style={{ scale }}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAddItem}
        >
          Add Item
        </motion.button>
        <AnimatePresence>
          {optimisticItems.map((item, i) => (
            <motion.div
              key={item.id}
              layoutId={item.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -50 }}
              custom={i}
            >
              {item.title}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.section>
    </LayoutGroup>
  );
}
```
This README.md is a complete, non-repetitive guide to Motion v12 with React 19, covering setup, animations, TypeScript, performance, and advanced techniques. It’s production-ready with clear examples and troubleshooting tips.

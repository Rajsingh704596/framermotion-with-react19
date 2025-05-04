import "./App.css";
import KeyframesAnimation from "./Page/2.Advanced-Animation/KeyframesAnimation";
import StaggeringAnimations from "./Page/2.Advanced-Animation/StaggeringAnimations";
import HoverAndTap from "./Page/1.Basic-Animation/HoverAndTap";
import SimpleAnimation from "./Page/1.Basic-Animation/SimpleAnimation";
import VariantsForCleanerCode from "./Page/1.Basic-Animation/VariantsForCleanerCode";
import DragGestures from "./Page/3.Gestures & Interactions/DragGestures";
import IntersectionObserver from "./Page/3.Gestures & Interactions/IntersectionObserver";
import ScrollTriggeredAnimation from "./Page/4.Scroll-Animation/ScrollTriggeredAnimation";
import ParallaxComponent from "./Page/4.Scroll-Animation/Scroll-LinkedParallax.jsx";
import SharedElementTransition from "./Page/5.Layout-Animation/SharedElementTransition";
import AutomaticLayoutAnimation from "./Page/5.Layout-Animation/AutomaticLayoutAnimations";
import Introduction from "./Page/Introduction";

//  Route Animations
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import Home from "./Page/6.Route-Animation/Home";
import About from "./Page/6.Route-Animation/About";
import Navbar from "./Page/6.Route-Animation/navbar";
import Button from "./components/button/Button";
import Card from "./components/card/card";

//
import ScrollColorChange from "./components/motion-Hooks/ScrollColorChange.jsx";
import LayoutNavbar from "./components/motion-Hooks/LayoutNavbar.jsx";
import SequenceAnimation from "./components/motion-Hooks/SequenceAnimation.jsx";
import PurchaseButton from "./components/motion-Hooks/PurchaseButton.jsx";

function App() {
  const location = useLocation(); // part of react-router-dom   /// Now this works because BrowserRouter is at the root
  // console.log(location);
  //o/p-
  // {
  //   pathname: "/about",       // current path
  //   search: "?id=123",        // query parameters
  //   hash: "#section1",        // URL hash
  //   state: { fromDashboard: true }, // state object
  //   key: "abc123"            // unique key
  // }

  return (
    <>
      {/* 
        'motion' components are the foundation of Framer Motion They work like
        regular React components but have animation capabilities
      
      */}
      <Introduction />
      <br />
      {/* Basic Animation */}
      <SimpleAnimation />
      <br />
      <VariantsForCleanerCode />
      <br />
      <HoverAndTap />
      <br />
      {/* Advanced Animations */}
      <KeyframesAnimation />
      <br />
      <StaggeringAnimations />
      <br />
      {/* Gestures & Interaction */}
      <DragGestures />
      <br />
      <IntersectionObserver />
      <br />
      {/* Scroll-Animation */}
      <ScrollTriggeredAnimation />
      <br />
      <ParallaxComponent />
      <br />
      {/* Layout-Animation */}
      <SharedElementTransition />
      <br />
      <AutomaticLayoutAnimation />
      <br />

      {/*  Route Animations */}
      {/* BrowserRouter wrap app.jsx so useLocation work properly  */}
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </AnimatePresence>

      <br />
      {/* Using Tailwind css+ Motion */}
      <Button />
      <br />
      <Card />
      <br />
      <ScrollColorChange />
      <br />
      <LayoutNavbar />
      <br />
      <SequenceAnimation />
      <br />
      <PurchaseButton />
    </>
  );
}

export default App;

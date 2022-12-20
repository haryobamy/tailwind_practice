import React from "react";
import DeveloperSection from "./components/DeveloperSection";
// import AnimationFour from "./components/AnimationFour";
// import AnimationThree from "./components/AnimationThree";
import Features from "./components/Features";
import FramerTest from "./components/FramerTest";
import Hero from "./components/Hero";
// import HeroImage from "./components/HeroImage";
// import HeroImage2 from "./components/HeroImage2";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import TestSection from "./components/TestSection";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <FramerTest />

      {/* <AnimationFour /> */}
      <Testimonials />

      <TestSection />

      <DeveloperSection />
    </>
  );
}

export default App;

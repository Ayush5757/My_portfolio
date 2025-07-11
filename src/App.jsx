import React from "react";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import AnimatedCounter from "./components/AnimatedCounter";
import NavBar from "./components/NavBar";
import ExperienceSection from "./sections/ExperienceSection";
import TitleHeader from "./components/TitleHeader";
import TechStack from "./sections/TechStack";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Spline from "@splinetool/react-spline";
import ExperienceShowing from "./sections/ExperienceShowing";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <ExperienceSection />
      <ExperienceShowing />
      <TechStack />
      <Contact />
      <Footer />
    </>
  );
};

export default App;

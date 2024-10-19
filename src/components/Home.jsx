import React from "react";
import HeroSections from "../components/HeroSection";
import Features from "../components/Features";
import Service from "./Services";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import FixedIcon from "./FixedIcon";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <HeroSections />
      <Features />
      <Service />
      <Projects />
      <About />
      <Contact />
      <FixedIcon />
      <Footer />
    </>
  );
}

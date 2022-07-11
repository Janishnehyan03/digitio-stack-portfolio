import React from "react";
import HeroSections from "../components/HeroSection";
import Features from "../components/Features";
import Projects from "./Projects";
import Footer from "./Footer";
import Services from "./Services";
import FixedIcon from "./FixedIcon";
import Contact from "./Contact";
import Posters from "./Posters";

export default function Home() {
  return (
    <>
      <HeroSections />
      <Features />
      <Services />
      <Projects />
      <Posters />
      <Contact />
      <FixedIcon />
      <Footer />
    </>
  );
}

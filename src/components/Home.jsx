import React from "react";
import Features from "../components/Features";
import HeroSections from "../components/HeroSection";
import Contact from "./Contact";
import FixedIcon from "./FixedIcon";
import Footer from "./Footer";
import Posters from "./Posters";
import Projects from "./Projects";

export default function Home() {
  return (
    <>
      <HeroSections />
      <Features />
      <Projects />
      <Posters />
      <Contact />
      <FixedIcon />
      <Footer />
    </>
  );
}

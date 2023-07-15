import React from "react";
import Features from "../components/Features";
import HeroSections from "../components/HeroSection";
import Contact from "./Contact";
import FixedIcon from "./FixedIcon";
import Footer from "./Footer";
import Pricing from "./Pricing";
import Service from "./Services";
import About from "./About";

export default function Home() {
  return (
    <>
      <HeroSections />
      <Features />
      <Pricing />
      <Service />
      <About />
      <Contact />
      <FixedIcon />
      <Footer />
    </>
  );
}

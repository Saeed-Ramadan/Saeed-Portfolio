import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Qualification from "../components/Qualification";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollUp from "../components/ScrollUp";

const Home = () => {
  return (
    <>
      <Header />
      <main className="main overflow-hidden relative z-10">
        <Hero />
        <About />
        <Education />
        <Qualification />
        <Skills />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
};

export default Home;

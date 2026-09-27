import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Qualification from "../components/Qualification";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import Leadership from "../components/Leadership";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollProgressIndicator from "../components/common/ScrollProgressIndicator";

// RATIONALE: Home page orchestrates sections with dynamic scroll progress tracking and smooth section navigation.
const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main className="main overflow-hidden relative z-10">
        <Hero />
        <About />
        <Qualification />
        <Skills />
        <Portfolio />
        <Leadership />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ScrollProgressIndicator />
    </>
  );
};

export default Home;

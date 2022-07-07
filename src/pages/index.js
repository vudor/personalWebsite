import React from "react";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Experience from "../components/cv/Experience";
import Skills from "../components/cv/Skills";
import Info from "../components/head/Info";
import Footer from "../components/nav/Footer";
import References from "../components/References";
import Seo from "../components/seo/SEO";
import "../scss/styles.scss";

const IndexPage = () => {
  return (
    <>
      <Seo />
      <Info />
      <AboutMe />
      <Experience />
      <Skills />
      <References />
      <Contact />
      <Footer />
    </>
  );
};

export default IndexPage;

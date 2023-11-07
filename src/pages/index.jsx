import React from "react";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Experience from "../components/cv/Experience";
import Skills from "../components/cv/Skills";
import Info from "../components/head/Info";
import Footer from "../components/nav/Footer";
import References from "../components/References";
import Head from "../components/seo/Head";
import "../scss/styles.scss";

function IndexPage() {
  return (
    <>
      <Head />
      <Info />
      <AboutMe />
      <Experience />
      <Skills />
      <References />
      <Contact />
      <Footer />
    </>
  );
}

export default IndexPage;

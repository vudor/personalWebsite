import { useMediaQuery } from "beautiful-react-hooks";
import React from "react";
import { Element } from "react-scroll";
import infoData from "../../content/info.json";
import BackgroundSvg from "../background/BackgroundSvg";
import Navbar from "../nav/Navbar";
import Routes from "../nav/Routes";
import logos from "./logos";
import SplashScreen from "./SplashScreen";

export default function Info() {
  const isMobile = useMediaQuery("(max-width:480px)");
  const isTablet = useMediaQuery("(min-width:480px) and (max-width:768px)");
  const isMedium = useMediaQuery("(min-width:768px) and (max-width:1200px)");
  let paths = infoData.large;
  let width = 1920;
  if (isMobile) {
    paths = infoData.medium;
    width = 480;
  } else if (isTablet) {
    paths = infoData.medium;
    width = 768;
  } else if (isMedium) {
    paths = infoData.medium;
    width = 1200;
  }

  console.log({ width });
  return (
    <Element name={Routes.INFO}>
      <section className="hero is-fullheight is-light gradient-primary-background">
        <BackgroundSvg elements={paths} width={width} />
        <div className="hero-head">
          <Navbar />
        </div>

        <div className="hero-body absolutely-centered">
          <SplashScreen entries={logos} breakText={isMobile || isTablet} />
        </div>
      </section>
    </Element>
  );
}

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
  const isSmallTablet = useMediaQuery(
    "(min-width:480px) and (max-width:600px)"
  );
  const isMediumLargeTablet = useMediaQuery(
    "(min-width:600px) and (max-width:768px)"
  );
  const isLargeTablet = useMediaQuery(
    "(min-width:768px) and (max-width:900px)"
  );
  const isMedium = useMediaQuery("(min-width:900px) and (max-width:1200px)");

  let paths = infoData.large;
  let width = 1920;
  if (isMobile) {
    width = 550;
  } else if (isSmallTablet) {
    width = 700;
  } else if (isMediumLargeTablet) {
    width = 800;
  } else if (isLargeTablet) {
    width = 1100;
  } else if (isMedium) {
    width = 1400;
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
          <SplashScreen entries={logos} breakText={isMobile || isSmallTablet} />
        </div>
      </section>
    </Element>
  );
}

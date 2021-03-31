import React from 'react';
import { Element } from 'react-scroll';
import infoData from '../../content/info.json';
import BackgroundSvg from '../background/BackgroundSvg';
import Navbar from '../nav/Navbar';
import Routes from '../nav/Routes';
import logos from './logos';
import SplashScreen from './SplashScreen';

export default function Info() {
  const { paths } = infoData;

  return (
    <Element name={Routes.INFO}>
      <section className="hero is-fullheight is-light gradient-primary-background">
        <BackgroundSvg elements={paths} />
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

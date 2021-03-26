import React from 'react';
import { Element } from 'react-scroll';
import experience from '../../content/experience.json';
import BackgroundSvg from '../background/BackgroundSvg';
import Routes from '../nav/Routes';
import Jobs from './Jobs';

export default function Experience() {
  const { jobs, title, subtitle, paths } = experience;
  return (
    <Element name={Routes.EXPERIENCE}>
      <section className="hero is-light gradient-primary-background">
        <BackgroundSvg height={200} elements={paths} />
      </section>
      <section className="hero py-2 is-light">
        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="title">{title}</p>
            <p className="subtitle">{subtitle}</p>
          </div>
        </div>
        <Jobs items={jobs} />
      </section>
    </Element>
  );
}

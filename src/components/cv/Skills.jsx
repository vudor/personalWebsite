import React from 'react';
import { Fade } from 'react-reveal';
import { Element } from 'react-scroll';
import skills from '../../content/skills.json';
import Routes from '../nav/Routes';

export default function Skills() {
  const { techStack, qualities } = skills;
  return (
    <Element name={Routes.SKILLS}>
      <section className="hero is-light is-medium">
        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="title">Skills</p>
          </div>
          <section className="section">
            <div className="has-text-centered">
              <Fade left cascade>
                {Object.entries(techStack).map(([_, value]) => {
                  return (
                    <ul key={`iconList-${value}`}>
                      {value.map((entry) => (
                        <span
                          className="icon is-x-large has-text-primary"
                          key={JSON.stringify(entry)}
                        >
                          <i className={entry + ' fa-4x'}></i>
                        </span>
                      ))}
                    </ul>
                  );
                })}
              </Fade>
            </div>
          </section>

          <section className="section">
            <div className="has-text-centered">
              <Fade left cascade>
                <ul>
                  {qualities.map((entry) => (
                    <li className="is-size-5" key={JSON.stringify(entry)}>
                      <span>{entry}</span>
                      &nbsp;
                      <span className="icon has-text-primary">
                        <i className="fas fa-check"></i>
                      </span>
                    </li>
                  ))}
                </ul>
              </Fade>
            </div>
          </section>
        </div>
      </section>
    </Element>
  );
}

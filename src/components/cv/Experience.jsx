import React from "react";
import { Element } from "react-scroll";
import experience from "../../content/experience.json";
import useExperienceData from "../../hooks/useExperienceData";
import BackgroundSvg from "../background/BackgroundSvg";
import Routes from "../nav/Routes";
import Job from "./Job";

export default function Experience() {
  const { paths } = experience;
  const { nodes } = useExperienceData();
  return (
    <Element name={Routes.EXPERIENCE}>
      <section className="hero is-light gradient-primary-background">
        <BackgroundSvg height={200} elements={paths} />
      </section>
      <section className="hero is-light">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h2 className="title">Experience</h2>
            <h3 className="subtitle">What Professions &bull; Education did I receive?</h3>
          </div>
        </div>
        {nodes.map(({ frontmatter, html }, index) => (
          <Job
            key={`${frontmatter.title} - ${frontmatter.company}`}
            description={html}
            title={frontmatter.title}
            company={frontmatter.company}
            start={frontmatter.start}
            end={frontmatter.end}
            showDivider={index !== nodes.length - 1}
          />
        ))}
      </section>
    </Element>
  );
}

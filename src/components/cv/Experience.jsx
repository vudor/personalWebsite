import React from "react";
import { Element } from "react-scroll";
import experience from "../../content/experience.json";
import BackgroundSvg from "../background/BackgroundSvg";
import Routes from "../nav/Routes";
import Job from "./Job";
import useExperienceData from "../../hooks/useExperienceData";

export default function Experience() {
  const { title, subtitle, paths } = experience;
  const { nodes } = useExperienceData();
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

import React from "react";
import { Link } from "gatsby";
import Head from "../components/seo/Head";
import Pages from "../components/nav/Pages";
import useExperienceData from "../hooks/useExperienceData";
import Job from "../components/cv/Job";

export default function Experience() {
  const { nodes } = useExperienceData();

  return (
    <>
      <Head />

      <div className="hero-body">
        <div className="container has-text-centered">
          <h2 className="title">Experience</h2>
          <h3 className="subtitle">Profession &bull; Education</h3>
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
      <Link to={Pages.HOME} title="Home">
        Home
      </Link>
    </>
  );
}

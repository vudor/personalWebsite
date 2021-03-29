import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Element } from "react-scroll";
import experience from "../../content/experience.json";
import BackgroundSvg from "../background/BackgroundSvg";
import Routes from "../nav/Routes";
import Job from "./Job";

export default function Experience() {
  const { title, subtitle, paths } = experience;
  const data = useStaticQuery(query);
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
        {data.allMarkdownRemark.nodes.map(({ frontmatter, html }, index) => (
          <Job
            key={`${frontmatter.title} - ${frontmatter.company}`}
            description={html}
            title={frontmatter.title}
            company={frontmatter.company}
            start={frontmatter.start}
            end={frontmatter.end}
            showDivider={index !== data.allMarkdownRemark.nodes.length - 1}
          />
        ))}
      </section>
    </Element>
  );
}

const query = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(experience)/" } }
      sort: { fields: [frontmatter___start, frontmatter___end], order: DESC }
    ) {
      nodes {
        html
        frontmatter {
          title
          company
          start(formatString: "MM.YYYY")
          end(formatString: "MM.YYYY")
        }
      }
    }
  }
`;

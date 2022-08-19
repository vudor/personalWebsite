import {
  Amazonaws,
  Angular,
  Cypress,
  Figma,
  Firebase,
  Gatsby,
  Git,
  Github,
  Graphql,
  Heroku,
  Jest,
  Jira,
  Nestjs,
  Nextdotjs,
  Nodedotjs,
  Nx,
  Postgresql,
  Prisma,
  ReactJs,
  Selenium,
  Spring,
  Typescript
} from "@icons-pack/react-simple-icons";
import React, { useMemo } from "react";
import { Fade } from "react-reveal";
import { Element } from "react-scroll";
import Routes from "../nav/Routes";

export default function Skills() {
  const size = "2.5em";
  const techStack = useMemo(
    () => ({
      frontend: {
        label: "State of the Art Frontend-Development",
        icons: [
          <Nextdotjs size={size} title="Next.js" />,
          <Gatsby size={size} title="Gatsby" />,
          <Angular size={size} title="Angular (2+)" />,
          <ReactJs size={size} title="React" />,
        ],
      },
      backend: {
        label: "Clean-Code Backend-Development",
        icons: [
          <Nestjs size={size} title="NestJS" />,
          <Spring size={size} title="Spring (Boot)" />,
          <Prisma size={size} title="Prisma" />,
          <Postgresql size={size} title="PostgreSQL" />,
        ],
      },
      cloud: {
        label: "Cloud-Development: Heroku - Firebase - AWS",
        icons: [
          <Heroku size={size} title="Heroku" />,
          <Firebase size={size} title="Firebase" />,
          <Amazonaws size={size} title="AWS" />,
        ],
      },
      misc: {
        label: "Modern Technologies",
        icons: [
          <Git size={size} title="Git" />,
          <Github size={size} title="Github" />,
          <Graphql size={size} title="GraphQL" />,
          <Jira size={size} title="Jira" />,
          <Figma size={size} title="Figma" />,
          <Nx size={size} title="Nx" />,
        ],
      },
      languages: {
        label: "Commonly used languages",
        icons: [
          <Typescript size={size} title="TypeScript" />,
          <Nodedotjs size={size} title="JavaScript / Node.js" />,
          "fab fa-java",
        ],
      },
      e2e: {
        label: "Integrative End-2-End Testing",
        icons: [
          <Cypress size={size} title="Cypress.io" />,
          <Jest size={size} title="Jest" />,
          <Selenium size={size} title="Selenium" />,
        ],
      },
      "teamwork-makes-the-dream-work": {
        label: "Experienced Team player",
      },
      blushy: {
        label: "High level of Comprehension and adaptability",
      },
    }),
    []
  );

  return (
    <Element name={Routes.SKILLS}>
      <section className="hero is-light is-medium">
        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="title">Skills</p>
            <p className="subtitle">Qualifications &bull; Frameworks &bull; Tools</p>
          </div>
          <section className="section">
            <div className="has-text-centered">
              <ul>
                <Fade>
                  {Object.entries(techStack).map(([key, value]) => (
                    <li className="is-size-5 py-4 my-4" key={key}>
                      {value.icons?.length ? (
                        <div>
                          <Fade top cascade>
                            {value.icons.map((entry) => (
                              <span className="m-3 has-text-primary">
                                {typeof entry === "string" ? <i className={`${entry} fa-3x`} /> : entry}
                              </span>
                            ))}
                          </Fade>
                        </div>
                      ) : null}
                      {value.label ? (
                        <Fade>
                          <span>
                            <span className="is-size-4">{value.label}</span>&nbsp;
                            <span className="icon has-text-secondary">
                              <i className="fas fa-check" />
                            </span>
                          </span>
                        </Fade>
                      ) : null}
                    </li>
                  ))}
                </Fade>
              </ul>
            </div>
          </section>
        </div>
      </section>
    </Element>
  );
}

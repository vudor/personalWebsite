import {
  SiGraphql,
  SiTypescript,
  SiHeroku,
  SiFirebase,
  SiAmazonaws,
  SiVercel,
  SiFigma,
  SiJira,
  SiGithub,
  SiGit,
  SiNextdotjs,
  SiGatsby,
  SiAngular,
  SiReact,
  SiNestjs,
  SiSpring,
  SiPrisma,
  SiPostgresql,
  SiMongodb,
  SiCypress,
  SiJest,
  SiSelenium,
  SiPlaywright,
  SiNodedotjs,
  SiDocker,
} from "@icons-pack/react-simple-icons";
import React from "react";
import { Fade } from "react-reveal";
import { Element } from "react-scroll";
import Routes from "../nav/Routes";

const size = "2.5em";
const techStack = {
  frontend: {
    label: "State of the Art Frontend-Development",
    icons: [
      <SiNextdotjs size={size} title="Next.js" />,
      <SiGatsby size={size} title="Gatsby" />,
      <SiReact size={size} title="React" />,
      <SiAngular size={size} title="Angular (2+)" />,
    ],
  },
  backend: {
    label: "Clean-Code Backend-Development",
    icons: [
      <SiNestjs size={size} title="NestJS" />,
      <SiSpring size={size} title="Spring (Boot)" />,
      <SiPrisma size={size} title="Prisma" />,
      <SiPostgresql size={size} title="PostgreSQL" />,
      <SiMongodb size={size} title="Mongodb" />,
    ],
  },
  cloud: {
    label: "Cloud-Development: Heroku - Firebase - AWS",
    icons: [
      <SiAmazonaws size={size} title="AWS" />,
      <SiHeroku size={size} title="Heroku" />,
      <SiVercel size={size} title="Vercel" />,
      <SiFirebase size={size} title="Firebase" />,
    ],
  },
  misc: {
    label: "Modern Technologies",
    icons: [
      <SiGit size={size} title="Git" />,
      <SiGithub size={size} title="Github" />,
      <SiDocker size={size} title="Docker" />,
      <SiGraphql size={size} title="GraphQL" />,
      <SiJira size={size} title="Jira" />,
      <SiFigma size={size} title="Figma" />,
    ],
  },
  languages: {
    label: "Commonly used languages",
    icons: [
      <SiTypescript size={size} title="TypeScript" />,
      <SiNodedotjs size={size} title="JavaScript / Node.js" />,
      "fab fa-java",
    ],
  },
  e2e: {
    label: "Integrative End-2-End Testing",
    icons: [
      <SiCypress size={size} title="Cypress.io" />,
      <SiPlaywright size={size} title="Playwright" />,
      <SiJest size={size} title="Jest" />,
      <SiSelenium size={size} title="Selenium" />,
    ],
  },
  "teamwork-makes-the-dream-work": {
    label: "Experienced Team player",
  },
  blushy: {
    label: "Experience in Kanban, Scrum and SAFe",
  },
};

export default function Skills() {
  return (
    <Element name={Routes.SKILLS}>
      <section className="hero is-light is-medium">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h2 className="title">Skills</h2>
            <h3 className="subtitle">Qualifications &bull; Frameworks &bull; Tools</h3>
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

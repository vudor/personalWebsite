import { Amazonaws, Angular, Cypress, Firebase, Gatsby, Github, Gitlab, Heroku, Jira, Nestjs, Nextdotjs, Nodedotjs, Nx, Postgresql, Prisma, ReactJs, Selenium, Spring, Typescript } from "@icons-pack/react-simple-icons";
import React, { useMemo } from "react";
import { Fade } from "react-reveal";
import { Element } from "react-scroll";
import Routes from "../nav/Routes";

export default function Skills() {
  const size = "4em";
  const techStack = useMemo(() => ({
    "frontend": {
      label: "State of the Art Frontend-Development",
      icons: [
        <Nextdotjs size={size} title="Next.js" />,
        <Gatsby size={size} title="Gatsby" />,
        <Angular size={size} title="Angular (2+)" />,
        <ReactJs size={size} title="React" />,
      ]
    },
    "backend": {
      label: "Clean-Code Backend-Development",
      icons: [
        <Nestjs size={size} title="NestJS" />,
        <Spring size={size} title="Spring (Boot)" />,
        <Prisma size={size} title="Prisma" />,
        <Postgresql size={size} title="Prisma" />,
      ],
    },
    "cloud": {
      label: "Cloud-Development: AWS - Heroku - Firebase",
      icons: [
        <Heroku size={size} title="Heroku" />,
        <Firebase size={size} title="Firebase" />,
        <Amazonaws size={size} title="AWS" />
      ]
    },
    "misc": {
      label: "Modern Technologies",
      icons: [
        <Github size={size} title="Github" />,
        <Gitlab size={size} title="Gitlab" />,
        <Jira size={size} title="Jira" />,
        <Nx size={size} title="Nx" />,
      ]
    },
    "languages": {
      label: "Commonly used languages",
      icons: [
        <Typescript size={size} title="TypeScript" />,
        <Nodedotjs size={size} title="JavaScript / Node.js" />,
        "fab fa-java"
      ],
    },
    "e2e": {
      label: "Integrative End-2-End Testing",
      icons: [
        <Cypress size={size} title="Cypress.io" />,
        <Selenium size={size} title="Selenium" />,
      ]
    },
    "teamwork-makes-the-dream-work": {
      label: "Experienced Team player",
    },
    "blushy": {
      label: "High level of Comprehension and adaptability"
    }
  }), []);

  return (
    <Element name={Routes.SKILLS}>
      <section className="hero is-light is-medium">
        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="title">Skills</p>
          </div>
          <section className="section">
            <div className="has-text-centered">
              <Fade top cascade>
                <ul>
                  {Object.entries(techStack).map(([key, value]) => (
                    <li className="is-size-5 py-4 my-4" key={key}>
                      {value.icons?.length ?
                        <ul>
                          {value.icons.map((entry) => (
                            <span className="px-3 mx-3 has-text-primary" >
                              {
                                typeof entry === "string" ?
                                  <i className={`${entry} fa-4x`} />
                                  :
                                  entry
                              }
                            </span>
                          ))}
                        </ul>
                        : null
                      }
                      {value.label ?
                        <>
                          <span className="is-size-4">{value.label}</span>&nbsp;<span className="icon has-text-secondary">
                            <i className="fas fa-check" />
                          </span>
                        </>
                        : null
                      }
                    </li>
                  ))}
                </ul>
              </Fade>
            </div>
          </section>
        </div>
      </section >
    </Element >
  );
}

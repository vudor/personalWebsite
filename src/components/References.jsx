import {
  Amazonaws,
  Amazondynamodb,
  Apachetomcat,
  Awsamplify, Bulma,
  Debian, Gatsby,
  Heroku,
  Nestjs,
  Nextdotjs,
  Postgresql,
  Prisma,
  ReactJs,
  Spring, Stackoverflow,
  Vercel
} from "@icons-pack/react-simple-icons";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Element } from "react-scroll";
import Routes from "./nav/Routes";
import "./references.scss";

const projects = [
  {
    name: "DokuCoach",
    // description:
    //   "Lorem ipsizzle dolor fizzle shizzle my nizzle crocodizzle, cool adipiscing elit. Yippiyo fo shizzle velizzle, away volutpizzle, bling bling quizzle, gravida vel, da bomb. Lorem ipsizzle dolor fizzle shizzle my nizzle crocodizzle",
    stack: [
      <ReactJs title="React" />,
      <Nestjs title="NestJS" />,
      <Postgresql title="PostgreSQL" />,
      <Heroku title="Heroku" />,
    ],
    image: <StaticImage alt="doku-coach application" src="../images/projects/dokucoach.png" />,
    homepage: "https://www.doku-coach.de",
  },
  {
    name: "SBL - School Book Orders",
    // description:
    //   "Lorem ipsizzle dolor fizzle shizzle my nizzle crocodizzle, cool adipiscing elit. Yippiyo fo shizzle velizzle, away volutpizzle, bling bling quizzle, gravida vel, da bomb. Lorem ipsizzle dolor fizzle shizzle my nizzle crocodizzle",
    image: <StaticImage alt="school-book-orders application" src="../images/projects/school-book-orders.png" />,
    stack: [
      <Nextdotjs title="Next.js" />,
      <Prisma title="Prisma" />,
      <Postgresql title="PostgreSQL" />,
      <Heroku title="Heroku" />,
    ],
  },
  {
    name: "Cryptohunt",
    homepage: "https://www.cryptohunt.it",
    // description:
    //   "Lorem ipsizzle dolor fizzle shizzle my nizzle crocodizzle, cool adipiscing elit. Yippiyo fo shizzle velizzle, away volutpizzle, bling bling quizzle, gravida vel, da bomb. Lorem ipsizzle dolor fizzle shizzle my nizzle crocodizzle",
    image: <StaticImage alt="cryptohunt application" src="../images/projects/cryptohunt.png" />,
    stack: [
      <Nextdotjs title="Next.js" />,
      <Prisma title="Prisma" />,
      <Postgresql title="PostgreSQL" />,
      <Vercel title="Vercel" />,
    ],
  },
  {
    name: "Hitcap",
    homepage: "https://www.hitcap.gg",
    image: <StaticImage alt="hitcap application" src="../images/projects/hitcap.png" />,
    stack: [
      <Awsamplify title="AWS Amplify" />,
      <ReactJs title="React" />,
      <Amazondynamodb title="AWS DynamoDB" />,
      <Amazonaws title="Amazon Web Services (AWS)" />,
    ],
  },
  // {
  //   name: "moreEvent",
  //   homepage: "https://www.meetingmasters.de/leistungen/teilnehmermanagement",
  // image: "src/images/projects/moreEvent.png",
  //   stack: [<Spring />, <Postgresql />],
  // },
  {
    name: "moreDirect",
    homepage: "https://direct.meetingmasters.de/direct/r/LocationSearch.action",
    image: <StaticImage alt="moreDirect application" src="../images/projects/moredirect.png" />,
    stack: [<Spring />, <Apachetomcat />, <Postgresql />, <Debian />],
  },
  {
    name: "Recursion",
    homepage: "https://www.kevelopment.dev",
    image: <StaticImage alt="kevelopment website" src="../images/projects/kevelopment.png" />,
    stack: [<Gatsby />, <Bulma />, <Stackoverflow/>],
  },
  // {
  //   name: "Dog License Trainer",
  //   homepage: "https://doggo.kevelopment.dev",
  //   image: <StaticImage alt="doggo trainer website" src="../images/projects/dog-license.png" />,
  //   stack: [<ReactJs />],
  // },
];

export default function References() {
  return (
    <Element name={Routes.REFERENCES}>
      <section className="hero is-light is-medium">
        <div className="hero-body">
          <div className="container has-text-centered is-spaced">
            <p className="title">Project Portfolio</p>
          </div>
        </div>
        <div className="hero-body pt-0">
          <div className="columns is-multiline is-variable">
            {projects.map((project) => (
              <div className="column is-full-mobile is-half-tablet is-one-third-desktop">
                <div className="box project-box has-text-centered  is-outlined has-text-primary m-4">
                  <p className="is-size-4 pb-4">{project.name}</p>
                  {project.image &&
                    (project.homepage ? (
                      <a href={project.homepage} target="_blank" rel="noreferrer">
                        {project.image}
                      </a>
                    ) : (
                      project.image
                    ))}
                  {project.description && <div className="content py-4">{project.description}</div>}
                  {project.stack?.length && (
                    <div className="content text-vertical-align pt-4">
                      {project.stack.map((icon) => (
                        <span className="px-2">{icon}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <span className="icon is-x-large has-text-primary">
              <i className="fas fa-hard-hat fa-4x" />
            </span>
            <p className="subtitle">
              Wanna be listed as well? <br /> Let&apos;s get In touch 👇
            </p>
          </div>
        </div>
      </section>
    </Element>
  );
}

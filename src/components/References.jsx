import {
  Amazonaws,
  Amazondynamodb,
  Apachetomcat,
  Awsamplify,
  Bulma,
  Coinmarketcap, Gatsby,
  Heroku,
  Hibernate,
  Mui,
  Nestjs,
  Nextdotjs,
  Postgresql,
  Prisma,
  ReactJs,
  Riotgames,
  Spring,
  Stackoverflow,
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
    client: "DokuCoach GmbH",
    // description:
    //   "Lorem ipsizzle dolor fizzle shizzle my nizzle crocodizzle, cool adipiscing elit. Yippiyo fo shizzle velizzle, away volutpizzle, bling bling quizzle, gravida vel, da bomb. Lorem ipsizzle dolor fizzle shizzle my nizzle crocodizzle",
    stack: [
      <ReactJs title="React" color="#61DAFB" />,
      <Nestjs title="NestJS" color="#E0234E" />,
      <Postgresql title="PostgreSQL" color="#4169E1" />,
      <Heroku title="Heroku" color="#430098" />,
    ],
    image: <StaticImage alt="doku-coach application" src="../images/projects/dokucoach.png" />,
    homepage: "https://www.doku-coach.de",
  },
  {
    name: "Cryptohunt",
    client: "Aircooled Ventures, Inc.",
    homepage: "https://www.cryptohunt.it",
    // description:
    //   "Lorem ipsizzle dolor fizzle shizzle my nizzle crocodizzle, cool adipiscing elit. Yippiyo fo shizzle velizzle, away volutpizzle, bling bling quizzle, gravida vel, da bomb. Lorem ipsizzle dolor fizzle shizzle my nizzle crocodizzle",
    image: <StaticImage alt="cryptohunt application" src="../images/projects/cryptohunt.png" />,
    stack: [
      <Nextdotjs title="Next.js" color="#000000" />,
      <Nestjs title="NestJS" color="#E0234E" />,
      <Prisma title="Prisma" color="#2D3748" />,
      <Postgresql title="PostgreSQL" color="#4169E1" />,
      <Coinmarketcap title="Coinmarketcap API" color="#17181B" />,
    ],
  },
  {
    name: "Hitcap.gg",
    client: "Hitcap eSports GmbH",
    homepage: "https://www.hitcap.gg",
    image: <StaticImage alt="hitcap application" src="../images/projects/hitcap.png" />,
    stack: [
      <ReactJs title="React" color="#61DAFB" />,
      <Awsamplify title="AWS Amplify" color="#FF9900" />,
      <Amazondynamodb title="AWS DynamoDB" color="#4053D6" />,
      <Amazonaws title="Amazon Web Services (AWS)" color="#232F3E" />,
      <Riotgames title="Riot API" color="#D32936" />,
    ],
  },
  {
    name: "School Book Order Platform",
    client: "SBL Fulfilment GmbH",
    // description:
    //   "Lorem ipsizzle dolor fizzle shizzle my nizzle crocodizzle, cool adipiscing elit. Yippiyo fo shizzle velizzle, away volutpizzle, bling bling quizzle, gravida vel, da bomb. Lorem ipsizzle dolor fizzle shizzle my nizzle crocodizzle",
    image: <StaticImage alt="school-book-orders application" src="../images/projects/school-book-orders.png" />,
    stack: [
      <Nextdotjs title="Next.js" color="#000000" />,
      <Mui title="Material UI Component Library" color="#007FFF" />,
      <Prisma title="Prisma" color="#2D3748" />,
      <Postgresql title="PostgreSQL" color="#4169E1" />,
      <Heroku title="Heroku" color="#430098" />,
    ],
  },
  {
    name: "moreEvent",
    client: "meetingmasters.de e.K.",
    homepage: "https://www.meetingmasters.de/teilnehmermanagement-moreevent",
    image: <StaticImage alt="moreDirect application" src="../images/projects/moreevent.png" />,
    stack: [
      <Spring title="Spring (Boot)" color="#6DB33F" />,
      <Hibernate title="Hibernate" color="#59666C" />,
      <Postgresql title="PostgreSQL" color="#4169E1" />,
      <Apachetomcat title="Apache Tomcat" color="#D22128" />,
    ],
  },
  {
    name: "moreDirect",
    client: "meetingmasters.de e.K.",
    homepage: "https://direct.meetingmasters.de/direct/r/LocationSearch.action",
    image: <StaticImage alt="moreDirect application" src="../images/projects/moredirect.png" />,
    stack: [
      <Spring title="Spring (Boot)" color="#6DB33F" />,
      <Postgresql title="PostgreSQL" color="#4169E1" />,
      <Apachetomcat title="Apache Tomcat" color="#D22128" />,
    ],
  },
  {
    name: "Dog License Trainer",
    client: "Kevelopment",
    homepage: "https://doggo.kevelopment.dev",
    image: <StaticImage alt="doggo trainer website" src="../images/projects/doggo.png" />,
    stack: [
      <Nextdotjs title="Next.js" color="#000000" />,
      <Mui title="Material UI Component Library" color="#007FFF" />,
      <Vercel title="Vercel" color="#000000" />,
    ],
  },
  {
    name: "Portfolio Website",
    client: "Kevelopment",
    homepage: "https://www.kevelopment.dev",
    image: <StaticImage alt="kevelopment website" src="../images/projects/kevelopment.png" />,
    stack: [
      <Gatsby title="Gatsby" color="#663399" />,
      <Bulma title="Bulma" color="#00D1B2" />,
      <Vercel title="Vercel" color="#000000" />,
      <Stackoverflow title="Stackoverflow" color="#F58025" />,
    ],
  },
];

export default function References() {
  return (
    <Element name={Routes.REFERENCES}>
      <section className="hero is-light is-medium">
        <div className="hero-body">
          <div className="container has-text-centered is-spaced">
            <h2 className="title">Portfolio</h2>
            <h3 className="subtitle">Projects &bull; Products &bull; Partner</h3>
          </div>
        </div>
        <div className="hero-body pt-0">
          <div className="columns is-multiline">
            {projects.map((project) => (
              <div className="column is-full-mobile is-full-tablet is-half-desktop is-one-third-fullhd">
                <div className="box project-box has-text-centered is-outlined has-text-primary m-4">
                  <p className="is-size-4 pb-4">{project.name}</p>
                  {project.image &&
                    (project.homepage ? (
                      <a href={project.homepage} target="_blank" rel="noreferrer">
                        {project.image}
                      </a>
                    ) : (
                      project.image
                    ))}
                  <p className="is-size-6 pb-4">© {project.client}</p>
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
              Wanna be listed as well? <br /> Drop me a message&nbsp;👇🏼
            </p>
          </div>
        </div>
      </section>
    </Element>
  );
}

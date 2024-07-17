import {
  SiAmazonaws,
  SiAmazondynamodb,
  SiApachetomcat,
  SiAwsamplify,
  SiBulma,
  SiCoinmarketcap,
  SiGatsby,
  SiHeroku,
  SiHibernate,
  SiMongodb,
  SiMui,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiRiotgames,
  SiSpring,
  SiSpringboot,
  SiStackoverflow,
  SiTypescript,
  SiVercel,
} from "@icons-pack/react-simple-icons";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Element } from "react-scroll";
import Routes from "./nav/Routes";
import "./references.scss";

const projects = [
  {
    name: "Porsche Purchasing Platform", 
    client: "Porsche Digital GmbH",
    homepage: "https://sell.porsche.com",
    stack: [
      <SiReact title="React" color="#61DAFB" />,
      <SiNestjs title="NestJS" color="#E0234E" />,
      <SiMongodb title="MongoDB" color="#69e371" />,
      <SiVercel title="Vercel" color="#000000" />,
    ],
    image: (<StaticImage
      alt="Landing Page of Sell your Porsche"
      title="Sell your Porsche @ Porsche Digital GmbH"
      src="../images/projects/sell-your-porsche.png"
    />)
  },
  {
    name: "Porsche Finder", 
    client: "Porsche Digital GmbH", 
    homepage: "https://finder.porsche.com",
    stack: [
      <SiReact title="React" color="#61DAFB" />,
      <SiSpring title="Spring (Boot)" color="#6DB33F" />,
      <SiPostgresql title="PostgreSQL" color="#4169E1" />,
      <SiAmazonaws title="Amazon Web Services (AWS)" color="#232F3E" />,
    ],
    image: (<StaticImage
      alt="Landing Page of Porsche Finder Platform"
      title="Porsche Finder @ Porsche Digital GmbH"
      src="../images/projects/porsche-finder.png"
    />)
  },
  {
    name: "DokuCoach",
    client: "DokuCoach GmbH",
    // description:
    //   "Lorem ipsizzle dolor fizzle shizzle my nizzle crocodizzle, cool adipiscing elit. Yippiyo fo shizzle velizzle, away volutpizzle, bling bling quizzle, gravida vel, da bomb. Lorem ipsizzle dolor fizzle shizzle my nizzle crocodizzle",
    stack: [
      <SiReact title="React" color="#61DAFB" />,
      <SiNestjs title="NestJS" color="#E0234E" />,
      <SiPostgresql title="PostgreSQL" color="#4169E1" />,
      <SiHeroku title="Heroku" color="#430098" />,
    ],
    image: (
      <StaticImage
        alt="doku-coach application"
        title="DokuCoach @ DokuCoach GmbH"
        src="../images/projects/dokucoach.png"
      />
    ),
    homepage: "https://www.doku-coach.de",
  },
  // {
  //   name: "Cryptohunt",
  //   client: "Aircooled Ventures, Inc.",
  //   image: (
  //     <StaticImaged
  //       alt="cryptohunt application"
  //       title="Cryptohunt @ Aircooled Ventures, Inc."
  //       src="../images/projects/cryptohunt.png"
  //     />
  //   ),
  //   stack: [
  //     <SiNextdotjs title="Next.js" color="#000000" />,
  //     <SiNestjs title="NestJS" color="#E0234E" />,
  //     <SiPrisma title="Prisma" color="#2D3748" />,
  //     <SiPostgresql title="PostgreSQL" color="#4169E1" />,
  //     <SiCoinmarketcap title="Coinmarketcap API" color="#17181B" />,
  //   ],
  // },
  {
    name: "Hitcap.gg",
    client: "Hitcap eSports GmbH",
    image: (
      <StaticImage
        alt="hitcap application"
        title="hitcap.gg @ Hitcap eSports GmbH"
        src="../images/projects/hitcap.png"
      />
    ),
    stack: [
      <SiReact title="React" color="#61DAFB" />,
      <SiAwsamplify title="AWS Amplify" color="#FF9900" />,
      <SiAmazondynamodb title="AWS DynamoDB" color="#4053D6" />,
      <SiAmazonaws title="Amazon Web Services (AWS)" color="#232F3E" />,
      <SiRiotgames title="Riot API" color="#D32936" />,
    ],
  },
  // {
  //   name: "School Book Order Platform",
  //   client: "SBL Fulfilment GmbH",
  //   image: (
  //     <StaticImage
  //       alt="school-book-orders application"
  //       title="School Book Order Platform @ SBL Fulfilment GmbH"
  //       src="../images/projects/school-book-orders.png"
  //     />
  //   ),
  //   stack: [
  //     <SiNextdotjs title="Next.js" color="#000000" />,
  //     <SiMui title="Material UI Component Library" color="#007FFF" />,
  //     <SiPrisma title="Prisma" color="#2D3748" />,
  //     <SiPostgresql title="PostgreSQL" color="#4169E1" />,
  //     <SiHeroku title="Heroku" color="#430098" />,
  //   ],
  // },
  {
    name: "moreEvent",
    client: "meetingmasters.de e.K.",
    homepage: "https://www.meetingmasters.de/teilnehmermanagement-moreevent",
    image: (
      <StaticImage
        alt="moreEvent application"
        title="moreEvent @ meetingmasters.de e.K."
        src="../images/projects/moreevent.png"
      />
    ),
    stack: [
      <SiSpring title="Spring (Boot)" color="#6DB33F" />,
      <SiHibernate title="Hibernate" color="#59666C" />,
      <SiPostgresql title="PostgreSQL" color="#4169E1" />,
      <SiApachetomcat title="Apache Tomcat" color="#D22128" />,
    ],
  },
  {
    name: "moreDirect",
    client: "meetingmasters.de e.K.",
    homepage: "https://direct.meetingmasters.de/direct/r/LocationSearch.action",
    image: (
      <StaticImage
        alt="moreDirect application"
        title="moreDirect @ meetingmasters.de e.K."
        src="../images/projects/moredirect.png"
      />
    ),
    stack: [
      <SiSpring title="Spring (Boot)" color="#6DB33F" />,
      <SiPostgresql title="PostgreSQL" color="#4169E1" />,
      <SiApachetomcat title="Apache Tomcat" color="#D22128" />,
    ],
  },
  {
    name: "Dog License Trainer",
    client: "Kevelopment",
    homepage: "https://doggo.kevelopment.dev",
    image: (
      <StaticImage
        alt="doggo trainer website"
        title="Dog License Trainer @ Kevelopment"
        src="../images/projects/doggo.png"
      />
    ),
    stack: [
      <SiNextdotjs title="Next.js" color="#000000" />,
      <SiMui title="Material UI Component Library" color="#007FFF" />,
      <SiVercel title="Vercel" color="#000000" />,
    ],
  },
  {
    name: "Portfolio Website",
    client: "Kevelopment",
    homepage: "https://www.kevelopment.dev",
    image: (
      <StaticImage
        alt="kevelopment portfolio website"
        title="Portfolio Website @ Kevelopment"
        src="../images/projects/kevelopment.png"
      />
    ),
    stack: [
      <SiGatsby title="Gatsby" color="#663399" />,
      <SiBulma title="Bulma" color="#00D1B2" />,
      <SiVercel title="Vercel" color="#000000" />,
      <SiStackoverflow title="Stackoverflow" color="#F58025" />,
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
            <h3 className="subtitle">What Products &bull; Projects &bull; Partners have I supported?</h3>
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
                      <a
                        href={project.homepage}
                        target="_blank"
                        rel="noreferrer"
                        title={`${project.name} @ ${project.client}`}
                      >
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

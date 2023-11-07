import {
  SiAngular, SiGatsby, SiGraphql, SiNestjs, SiNextdotjs,
  SiNodedotjs, SiReact, SiSpring,
} from "@icons-pack/react-simple-icons";
import React from "react";

const logoSize = 32;
const styles = {
  logo: {
    verticalAlign: "middle",
    marginBottom: 4,
  },
};

const logos = [
  {
    label: "Node.js",
    logo: (
      <SiNodedotjs size={logoSize} color="#339933" style={styles.logo} title="Node.js" />
    ),
  },
  {
    label: "Angular",
    logo: (
      <SiAngular size={logoSize} color="#DD0031" style={styles.logo} title="Angular (2+)" />
    ),
  },
  {
    label: "React",
    logo: (
      <SiReact size={logoSize} color="#61DAFB" style={styles.logo} title="React" />
    ),
  },
  {
    label: "Next.js",
    logo: (
      <SiNextdotjs size={logoSize} color="#000000" style={styles.logo} title="Next.js" />
    ),
  },
  {
    label: "Gatsby",
    logo: (
      <SiGatsby size={logoSize} color="#663399" style={styles.logo} title="Gatsby" />
    ),
  },
  {
    label: "React-Native",
    logo: (
      <SiReact size={logoSize} color="#61DAFB" style={styles.logo} title="React-Native" />
    ),
  },
  {
    label: "NestJS",
    logo: (
      <SiNestjs size={logoSize} color="#E0234E" style={styles.logo} title="NestJS" />
    ),
  },
  {
    label: "GraphQL",
    logo: (
      <SiGraphql size={logoSize} color="#E10098" style={styles.logo} title="GraphQL" />
    ),
  },
  {
    label: "Spring Boot",
    logo: (
      <SiSpring size={logoSize} color="#6DB33F" style={styles.logo} title="Spring (Boot)" />
    ),
  },
];

export default logos;

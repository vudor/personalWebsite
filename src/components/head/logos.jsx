import { Angular, Gatsby, Nestjs, Nextdotjs, Nodedotjs, ReactJs, Spring } from "@icons-pack/react-simple-icons";
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
      <Nodedotjs size={logoSize} color="#339933" style={styles.logo} title="Node.js" />
    ),
  },
  {
    label: "Angular",
    logo: (
      <Angular size={logoSize} color="#DD0031" style={styles.logo} title="Angular (2+)" />
    ),
  },
  {
    label: "React",
    logo: (
      <ReactJs size={logoSize} color="#61DAFB" style={styles.logo} title="React" />
    ),
  },
  {
    label: "Next.js",
    logo: (
      <Nextdotjs size={logoSize} color="#000000" style={styles.logo} title="Next.js" />
    ),
  },
  {
    label: "Gatsby",
    logo: (
      <Gatsby size={logoSize} color="#663399" style={styles.logo} title="Gatsby" />
    ),
  },
  {
    label: "React-Native",
    logo: (
      <ReactJs size={logoSize} color="#61DAFB" style={styles.logo} title="React-Native" />
    ),
  },
  {
    label: "NestJS",
    logo: (
      <Nestjs size={logoSize} color="#E0234E" style={styles.logo} title="NestJS" />
    ),
  },
  {
    label: "Spring Boot",
    logo: (
      <Spring size={logoSize} color="#6DB33F" style={styles.logo} title="Spring (Boot)" />
    ),
  },
];

export default logos;

import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const logoSize = 32;
const styles = {
  logo: {
    verticalAlign: 'middle',
    width: logoSize,
    height: logoSize,
    marginBottom: 2,
  },
};

export default [
  {
    label: 'Node.js',
    logo: (
      <StaticImage
        width={logoSize}
        height={logoSize}
        aspectRatio={1}
        style={styles.logo}
        alt="Node.js Logo"
        src="../../images/logos/nodejs-logo.png"
      />
    ),
  },
  {
    label: 'Angular',
    logo: (
      <StaticImage
        width={logoSize}
        height={logoSize}
        aspectRatio={1}
        style={styles.logo}
        alt="Angular Logo"
        src="../../images/logos/angular-logo.png"
      />
    ),
  },
  {
    label: 'Gatsby',
    logo: (
      <StaticImage
        width={logoSize}
        height={logoSize}
        aspectRatio={1}
        style={styles.logo}
        alt="Gatsby Logo"
        src="../../images/logos/gatsby-logo.png"
      />
    ),
  },
  {
    label: 'React',
    logo: (
      <StaticImage
        width={logoSize}
        height={logoSize}
        aspectRatio={1}
        style={styles.logo}
        alt="React Logo"
        src="../../images/logos/react-logo.png"
      />
    ),
  },
  {
    label: 'React-Native',
    logo: (
      <StaticImage
        width={logoSize}
        height={logoSize}
        aspectRatio={1}
        style={styles.logo}
        alt="React-Native Logo"
        src="../../images/logos/react-logo.png"
      />
    ),
  },
  {
    label: 'Spring Boot',
    logo: (
      <StaticImage
        width={logoSize}
        height={logoSize}
        aspectRatio={1}
        style={styles.logo}
        alt="Spring Boot Logo"
        src="../../images/logos/spring-boot-logo.png"
      />
    ),
  },
];

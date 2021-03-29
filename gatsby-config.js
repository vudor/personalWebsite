module.exports = {
  siteMetadata: {
    title: "Kevelopment",
    titleTemplate: "%s · Software Development and Consulting",
    author: "Kevin Adam",
    siteUrl: "https://www.kevelopment.dev",
    keywords: [
      "Kevelopment",
      "Software Developer",
      "Software Development",
      "IT-Consultant",
      "IT-Consulting",
      "Full-Stack",
      "Frontend",
      "Backend",
      "UI/UX",
      "Kevin Adam",
      "React-Native",
      "React",
      "Gatsby",
      "Website",
      "Node.js",
      "Spring",
      "Java",
      "JavaScript",
      "TypeScript",
    ],
    lang: "en",
    description:
      "Gatsby Portfolio Website for Kevin Adam - Freelance Software Developer, IT-Consultant and Lecturer",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown-content",
        path: `${__dirname}/src/content/md`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "experience-content",
        path: `${__dirname}/src/content/experience`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/images/`,
      },
    },
  ],
};

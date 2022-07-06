module.exports = {
  siteMetadata: {
    title: "Kevelopment",
    titleTemplate: "%s · Freelance Software Development and Consulting",
    author: "Kevin Adam",
    siteUrl: "https://www.kevelopment.dev",
    image: "src/images/profile.png",
    keywords: [
      "IT-Consultant",
      "freelance it consultant",
      "software and consulting",
      "software developer",
      "web developer",
      "full stack developer",
      "application developer",
      "application web developer",
      "frontend developer",
      "backend developer",
      "mobile developer",
      "freelancer",
      "freelance software developer",
    ],
    lang: "en",
    description:
      "Personal website of Kevin Adam - the Freelance Web Developer for your next project",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
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

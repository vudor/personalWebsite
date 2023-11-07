module.exports = {
  siteMetadata: {
    title: "Kevelopment · Freelance Software Development and Consulting",
    author: "Kevin Adam",
    siteUrl: "https://www.kevelopment.dev",
    image: "src/images/profile.png",
    keywords: [
      "IT-Consultant",
      "freelance it consultant",
      "software developer",
      "web developer",
      "full stack developer",
      "application web developer",
      "senior frontend developer",
      "react developer",
      "next.js developer",
      "backend developer",
      "mobile developer",
      "freelancer oldenburg",
      "freelance software developer",
      "freelance web developer",
      "freelancer start up",
      "mvp development",
      "minimal viable product",
    ],
    lang: "en",
    description: "Kevin Adam - the Freelance Web Developer from Oldenburg ready for your Project. You're a Start up looking for someone who can drive forward your MVP? Search no more and hit me up!",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
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
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
    },
  ],
};

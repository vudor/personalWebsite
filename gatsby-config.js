module.exports = {
  siteMetadata: {
    title: "Kevelopment",
    titleTemplate: "%s · Software Development and Consulting",
    author: "Kevin Adam",
    siteUrl: "https://www.kevelopment.dev",
    image: "/src/images/profile.jpg",
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/images/`,
      },
      __key: "images",
    },
  ],
};

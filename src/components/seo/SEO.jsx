import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

const SEO = () => {
  const { site, file } = useStaticQuery(query);
  const { src, maxWidth, maxHeight } = file.childImageSharp.fluid;

  const { siteMetadata } = site;
  const {
    title,
    titleTemplate,
    lang,
    description,
    keywords,
    siteUrl,
  } = siteMetadata;

  return (
    <Helmet
      title={title}
      titleTemplate={titleTemplate}
      htmlAttributes={{
        lang,
      }}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          name: "keywords",
          content: keywords.join(","),
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:url`,
          content: siteUrl,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ].concat(
        file.childImageSharp.fluid
          ? [
              {
                property: "og:image",
                content: src,
              },
              {
                property: "og:image:width",
                content: maxWidth,
              },
              {
                property: "og:image:height",
                content: maxHeight,
              },
              {
                name: "twitter:card",
                content: "summary_large_image",
              },
            ]
          : [
              {
                name: "twitter:card",
                content: "summary",
              },
            ]
      )}
    >
      <html lang={lang} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <meta charSet="utf-8" content="text/html" />
      {/* <meta name="image" content={image} /> */}
    </Helmet>
  );
};

export default SEO;

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        titleTemplate
        lang
        keywords
        description
        siteUrl
      }
    }

    file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
        gatsbyImageData
      }
    }
  }
`;

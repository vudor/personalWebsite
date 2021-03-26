import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

const SEO = () => {
  const { site } = useStaticQuery(query);
  const { siteMetadata } = site;
  const {
    title,
    titleTemplate,
    lang,
    description,
    keywords,
    siteUrl,
    image,
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
      ]}
    >
      <html lang={lang} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <meta charSet="utf-8" content="text/html" />
      <meta name="image" content={image} />
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
        image
      }
    }
  }
`;

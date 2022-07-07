import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";
import React from "react";

const GET_SEO_DATA = graphql`
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

function SEO() {
  const { site } = useStaticQuery(GET_SEO_DATA);
  const { title, titleTemplate, lang, description, keywords, siteUrl, image } = site.siteMetadata;

  return (
    <Helmet title={title} titleTemplate={titleTemplate} htmlAttributes={{ lang }}>
      {/* General Tags */}
      <html lang={lang} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" content="text/html" />
      <meta name="google-site-verification" content="ZKnE5oGSiZc6X0Y__sqJG1bRdQPwiBXjHYvhxL0THa8" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(",")} />
      <meta name="image" content={image} />

      {/* OpenGraph aka Facebook Tags */}
      <meta name="og:title" content={title} />
      <meta name="og:site_name" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:url" content={siteUrl} />
      <meta name="og:image" content={image} />
      <meta name="og:type" content="website" />

      {/* Twitter Tags */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:card" content="summary" />
    </Helmet>
  );
}

export default SEO;

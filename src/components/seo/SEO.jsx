import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = () => {
  const { site } = useStaticQuery(query);
  const { siteMetadata } = site;
  const {
    title,
    titleTemplate,
    lang,
    description,
    siteUrl,
    image,
  } = siteMetadata;
  return (
    <Helmet title={title} titleTemplate={titleTemplate}>
      <title>{title}</title>
      <html lang={lang} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <meta charSet="utf-8" content="text/html" />
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
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
        description
        siteUrl
        image
      }
    }
  }
`;

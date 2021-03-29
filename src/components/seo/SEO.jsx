import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

const SEO = () => {
  const { site, file } = useStaticQuery(query);
  const { height, width, images } = file.childImageSharp.gatsbyImageData;
  const { src } = images.fallback;
  const {
    title,
    titleTemplate,
    lang,
    description,
    keywords,
    siteUrl,
  } = site.siteMetadata;
  const socialImageUrl = `${siteUrl}${src}`;

  return (
    <Helmet
      title={title}
      titleTemplate={titleTemplate}
      htmlAttributes={{
        lang,
      }}
    >
      <html lang={lang} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" content="text/html" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(",")} />

      {/** OpenGraph aka Facebook Tags */}
      <meta name="og:title" content={title} />
      <meta name="og:site_name" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:url" content={siteUrl} />
      <meta name="og:image:height" content={height} />
      <meta name="og:image:width" content={width} />
      <meta name="og:image" content={socialImageUrl} />
      <meta name="og:image:secure" content={socialImageUrl} />
      <meta name="og:type" content="website" />

      {/** Twitter Tags */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={socialImageUrl} />
      <meta name="twitter:image:src" content={src} />
      <meta name="twitter:card" content="summary" />
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
        gatsbyImageData(quality: 100, formats: JPG)
      }
    }
  }
`;

import { graphql, useStaticQuery } from "gatsby";

const GET_SEO_DATA = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        lang
        keywords
        description
        siteUrl
        image
      }
    }
  }
`;

const useSeoData = () => {
  const { site } = useStaticQuery(GET_SEO_DATA);
  return site.siteMetadata;
};

export default useSeoData;

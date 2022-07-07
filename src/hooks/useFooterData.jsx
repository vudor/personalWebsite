import { graphql, useStaticQuery } from "gatsby";

const GET_FOOTER_DATA = graphql`
  query Footer {
    site {
      siteMetadata {
        author
      }
    }
  }
`;

const useFooterData = () => {
  const { site } = useStaticQuery(GET_FOOTER_DATA);
  return site.siteMetadata;
};

export default useFooterData;

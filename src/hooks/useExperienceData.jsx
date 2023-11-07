import { graphql, useStaticQuery } from "gatsby";

const GET_EXPERIENCE_DATA = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(experience)/" } }
      sort: { frontmatter: { start: DESC } }
    ) {
      nodes {
        html
        frontmatter {
          title
          company
          start(formatString: "MM.YYYY")
          end(formatString: "MM.YYYY")
        }
      }
    }
  }
`;

const useExperienceData = () => {
  const { allMarkdownRemark } = useStaticQuery(GET_EXPERIENCE_DATA);
  return allMarkdownRemark;
};

export default useExperienceData;

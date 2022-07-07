import { graphql, useStaticQuery } from "gatsby";

const GET_ABOUT_ME_DATA = graphql`
  {
    file(name: { eq: "aboutme" }) {
      childMarkdownRemark {
        html
      }
    }
  }
`;

const useAboutMeData = () => {
  const { file } = useStaticQuery(GET_ABOUT_ME_DATA);
  return file.childMarkdownRemark;
};

export default useAboutMeData;

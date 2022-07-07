import { graphql, useStaticQuery } from "gatsby";

const GET_LEGAL_NOTICE_DATA = graphql`
  {
    file(name: { eq: "legalNotice" }) {
      childMarkdownRemark {
        html
      }
    }
  }
`;

const useLegalNoticeData = () => {
  const { file } = useStaticQuery(GET_LEGAL_NOTICE_DATA);
  return file.childMarkdownRemark;
};

export default useLegalNoticeData;

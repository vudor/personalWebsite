import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import * as Scroll from "react-scroll";
import footerData from "../../content/footer.json";
import LegalNotice from "../buttons/LegalNotice";
import SocialMediaButton from "../buttons/SocialMediaButton";
import "./footer.scss";

const Footer = () => {
  const { site } = useStaticQuery(query);
  const { socialMediaButtons } = footerData;

  const scrollToTop = () => {
    Scroll.animateScroll.scrollToTop();
  };

  return (
    <footer className="footer has-background-grey-darker py-4">
      <div className="content has-text-centered">
        <div className="container">
          <div className="has-text-light mb-2">
            <span
              className="icon back-to-top"
              onClick={scrollToTop}
              onKeyDown={scrollToTop}
              role="button"
              tabIndex={0}
            >
              <i className="fas fa-chevron-up"></i>
            </span>
          </div>
          <div className="social-links">
            {socialMediaButtons.map(({ iconName, label, url }) => (
              <SocialMediaButton
                key={`${iconName} - ${label}`}
                iconClass={iconName}
                label={label}
                url={url}
              />
            ))}
          </div>
          <div>
            <hr className="footer-divider" />
          </div>
          <LegalNotice />
          <div className="has-text-light">
            <p>
              {`© 2021 with `}
              <a
                target="_blank"
                rel="noreferrer"
                className="has-text-info"
                href="https://www.gatsbyjs.com"
              >
                Gatsby
              </a>
              {", "}
              <a
                target="_blank"
                rel="noreferrer"
                className="has-text-info"
                href="https://www.bulma.io"
              >
                Bulma
              </a>
              {` and `}
              <span className="icon has-text-info">
                <i className="fas fa-heart"></i>
              </span>{" "}
              {`by ${site.siteMetadata.author}`}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const query = graphql`
  query Footer {
    site {
      siteMetadata {
        author
      }
    }
  }
`;

import React from "react";
import * as Scroll from "react-scroll";
import footerData from "../../content/footer.json";
import useFooterData from "../../hooks/useFooterData";
import LegalNotice from "../buttons/LegalNotice";
import SocialMediaButton from "../buttons/SocialMediaButton";
import "./footer.scss";

function Footer() {
  const { socialMediaButtons } = footerData;
  const { author } = useFooterData();
  const scrollToTop = () => {
    Scroll.animateScroll.scrollToTop();
  };

  return (
    <footer className="footer has-background-grey-darker py-4">
      <div className="content has-text-centered">
        <div className="container">
          <div className="has-text-light mb-2">
            <button
              type="button"
              onClick={scrollToTop}
              onKeyDown={scrollToTop}
              className="button is-outlined is-light is-rounded"
            >
              <span className="icon fas fa-1x">
                <i className="fas fa-chevron-up" />
              </span>
            </button>
          </div>
          <div className="social-links">
            {socialMediaButtons.map(({ iconName, label, url }) => (
              <SocialMediaButton key={`${iconName} - ${label}`} iconClass={iconName} label={label} url={url} />
            ))}
          </div>
          <div>
            <hr className="footer-divider" />
          </div>
          <LegalNotice />
          <div className="has-text-light py-2">
            <p>
              {"© 2021 with "}
              <a target="_blank" rel="noreferrer" className="has-text-info" href="https://www.gatsbyjs.com">
                Gatsby
              </a>
              {", "}
              <a target="_blank" rel="noreferrer" className="has-text-info" href="https://www.bulma.io">
                Bulma
              </a>
              {" and "}
              <a target="_blank" rel="noreferrer" className="has-text-info" href="https://youtu.be/3rzgrP7VA_Q?t=14">
                <span className="icon has-text-info">
                  <i className="fas fa-heart" />
                </span>{" "}
              </a>
              {`by ${author}`}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

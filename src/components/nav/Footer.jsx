import React from "react";
import * as Scroll from "react-scroll";
import { Bulma, Gatsby } from "@icons-pack/react-simple-icons";
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
              aria-label="Scroll to Top"
              className="button is-outlined is-light is-rounded"
            >
              <span className="icon fas fa-1x">
                <i className="fas fa-chevron-up" />
              </span>
            </button>
          </div>
          <div className="social-links m-4">
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
              Built with{" "}
              <a
                target="_blank"
                aria-label="Link to Gatsby Homepage"
                rel="noreferrer"
                className="has-text-info"
                href="https://www.gatsbyjs.com"
              >
                <Gatsby size={14} />
                &nbsp;Gatsby
              </a>
              {", "}
              <a
                target="_blank"
                aria-label="Link to Bulma Homepage"
                rel="noreferrer"
                className="has-text-info"
                href="https://www.bulma.io"
              >
                <Bulma size={14} />
                &nbsp;Bulma
              </a>
              {" and "}
              <a
                target="_blank"
                aria-label="Youtube Link"
                rel="noreferrer"
                className="has-text-info"
                href="https://youtu.be/3rzgrP7VA_Q?t=14"
              >
                <span className="icon has-text-info">
                  <i className="fas fa-heart" />
                </span>{" "}
              </a>
            </p>
            <p>{`© 2021 - 2022 ${author}`}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import React from "react";
import * as Scroll from "react-scroll";
import {SiBulma, Gatsby, SiGatsby} from "@icons-pack/react-simple-icons";
import footerData from "../../content/footer.json";
import LegalNotice from "../buttons/LegalNotice";
import SocialMediaButton from "../buttons/SocialMediaButton";
import "./footer.scss";

function Footer() {
  const { socialMediaButtons } = footerData;
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
                title="GatsbyJS"
                href="https://www.gatsbyjs.com"
              >
                <SiGatsby size={14} />
                &nbsp;Gatsby
              </a>
              {", "}
              <a
                target="_blank"
                aria-label="Link to Bulma Homepage"
                rel="noreferrer"
                className="has-text-info"
                title="Bulma"
                href="https://www.bulma.io"
              >
                <SiBulma size={14} />
                &nbsp;Bulma
              </a>
              {" and "}
              <a
                target="_blank"
                aria-label="Youtube Link"
                rel="noreferrer"
                className="has-text-info"
                title="rickroll"
                href="https://youtu.be/3rzgrP7VA_Q?t=14"
              >
                <span className="icon has-text-info">
                  <i className="fas fa-heart" />
                </span>{" "}
              </a>
            </p>
            <p>Copyright © 2021 - 2023 <a
                rel="author"
                className="has-text-info"
                title="author"
                href="https://www.kevelopment.dev"
            >Kevin Adam</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

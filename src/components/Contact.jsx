import React from "react";
import { Element } from "react-scroll";
import contact from "../content/contact.json";
import BackgroundSvg from "./background/BackgroundSvg";
import Routes from "./nav/Routes";

export default function Contact() {
  const { title, subtitle, buttonText, paths } = contact;
  return (
    <Element name={Routes.CONTACT}>
      <section className="hero is-light is-fullheight gradient-primary-background-reverse">
        <BackgroundSvg height="200" elements={paths} />
        <div className="hero-body">
          <div className="container has-text-centered pb-6">
            <h2 className="title has-text-light">{title}</h2>
            <h3 className="subtitle has-text-light">{subtitle}</h3>
            <a href="mailto:info@kevelopment.dev" rel="author" className="button is-white is-outlined is-rounded" title="contact me">
              <span className="icon is-medium">
                <i className="fa-lg far fa-paper-plane" />
              </span>
              <span>{buttonText}</span>
            </a>
          </div>
        </div>
      </section>
    </Element>
  );
}

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
            <p className="title has-text-light">{title}</p>
            <div className="subtitle has-text-light">{subtitle}</div>
            <a href="mailto:info@kevelopment.dev" className="button is-white is-outlined is-rounded">
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

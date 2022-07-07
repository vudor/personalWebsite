import React from "react";
import { Element } from "react-scroll";
import references from "../content/references.json";
import Routes from "./nav/Routes";
import "./references.scss";

export default function References() {
  const { title, subtitle } = references;
  return (
    <Element name={Routes.REFERENCES}>
      <section className="hero is-light is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="title">{title}</p>
            <p className="subtitle loading-dots">{subtitle}</p>
            <span className="icon is-x-large has-text-primary">
              <i className="fas fa-hard-hat fa-4x" />
            </span>
          </div>
        </div>
      </section>
    </Element>
  );
}

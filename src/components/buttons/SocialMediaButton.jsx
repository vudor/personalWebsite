import { Github, Linkedin } from "@icons-pack/react-simple-icons";
import React from "react";

const SocialMediaButtonIcons = {
  linkedin: <Linkedin />,
  github: <Github />,
};

// eslint-disable-next-line react/prop-types
export default function SocialMediaButton({ iconClass, label, url }) {
  return (
    <a
      href={url}
      aria-label={`Social Media Button to ${label}`}
      target="_blank"
      rel="noreferrer"
      title={label}
      className="button is-outlined is-light is-rounded mx-4"
    >
      <span className="icon fa-2x">{SocialMediaButtonIcons[iconClass]}</span>
      <span>{label}</span>
    </a>
  );
}

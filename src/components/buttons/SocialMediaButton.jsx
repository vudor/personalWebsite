import { Github, Linkedin } from "@icons-pack/react-simple-icons";
import React from "react";

const SocialMediaButtonIcons = {
  linkedin: <Linkedin />,
  github: <Github />
};

// eslint-disable-next-line react/prop-types
export default function SocialMediaButton({ iconClass, label, url }) {
  return (
    <a href={url} target="_blank" rel="noreferrer" className="button is-outlined is-light is-rounded mx-2">
      <span className="icon fa-2x">
        {SocialMediaButtonIcons[iconClass]}
      </span>
      <span>{label}</span>
    </a>
  );
}

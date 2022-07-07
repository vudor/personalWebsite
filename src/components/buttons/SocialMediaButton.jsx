import React from "react";

// eslint-disable-next-line react/prop-types
export default function SocialMediaButton({ iconClass, label, url }) {
  return (
    <a href={url} target="_blank" rel="noreferrer" className="button is-outlined is-light is-rounded mx-2">
      <span className="icon fas fa-2x">
        <i className={iconClass} />
      </span>
      <span>{label}</span>
    </a>
  );
}

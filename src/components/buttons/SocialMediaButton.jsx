import React from 'react';

export default function SocialMediaButton({ iconClass, label, url }) {
  const openLinkInNewTab = () => {
    window.open(url, '_blank');
  };

  return (
    <button
      className="button is-outlined is-light is-rounded mx-2"
      onClick={openLinkInNewTab}
    >
      <span className="icon fas fa-2x">
        <i className={iconClass}></i>
      </span>
      <span>{label}</span>
    </button>
  );
}

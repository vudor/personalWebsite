import { graphql, useStaticQuery } from "gatsby";
import React, { useState } from "react";
import "./LegalNotice.scss";

const LegalNotice = () => {
  const { file } = useStaticQuery(query);
  const [isOpen, setOpen] = useState(false);
  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      <button className="button is-outlined is-light is-rounded" onClick={openModal}>
        Legal Notice
      </button>
      {isOpen ? (
        <div className="modal-overlay blurred-container">
          <div className="legalnotice-modal elevation has-text-left">
            <button onClick={closeModal} className="button is-light top-right">
              <span className="icon is-small">
                <i className="fas fa-times"></i>
              </span>
            </button>
            <p
              dangerouslySetInnerHTML={{
                __html: file.childMarkdownRemark.html,
              }}
            ></p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default LegalNotice;

const query = graphql`
  {
    file(name: { eq: "legalNotice" }) {
      childMarkdownRemark {
        html
      }
    }
  }
`;

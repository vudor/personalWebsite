import React, { useState } from "react";
import useLegalNoticeData from "../../hooks/useLegalNoticeData";
import "./LegalNotice.scss";

function LegalNotice() {
  const { html } = useLegalNoticeData();
  const [isOpen, setOpen] = useState(false);
  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      <button className="button is-outlined is-light is-rounded m-4" onClick={openModal} type="button">
        Legal Notice
      </button>
      {isOpen ? (
        <div className="modal-overlay blurred-container">
          <div className="legalnotice-modal elevation has-text-left">
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button onClick={closeModal} className="button is-light top-right" type="button">
              <span className="icon is-small">
                <i className="fas fa-times" />
              </span>
            </button>
            <p
              dangerouslySetInnerHTML={{
                __html: html,
              }}
            />
          </div>
        </div>
      ) : null}
    </>
  );
}

export default LegalNotice;

import React from "react";
import "./job.scss";

// eslint-disable-next-line react/prop-types
export default function Job({ description, title, company, start, end, showDivider = false }) {
  return (
    <>
      <section className="hero-body">
        <h4 className="title has-text-primary" style={{ textTransform: "uppercase" }}>
          {title}
        </h4>
        <h5 className="subtitle">
          <div className="level">
            <div className="level-left has-text-weight-medium">
              <p>{company}</p>
            </div>
            <div className="level-right">
              <p>{start && end ? `${start} - ${end}` : `since ${start}`}</p>
            </div>
          </div>
        </h5>
        <div
          className="content"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
      </section>
      {showDivider ? <hr className="divider" /> : null}
    </>
  );
}

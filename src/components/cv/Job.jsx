import React from "react";
import "./job.scss";

export default function Job({
  description,
  title,
  company,
  start,
  end,
  showDivider = false,
}) {
  return (
    <>
      <section className="section mx-6 my-2 p-6">
        <h1
          className="title has-text-primary"
          style={{ textTransform: "uppercase" }}
        >
          {title}
        </h1>
        <h2 className="subtitle ">
          <div className="level">
            <div className="level-left has-text-weight-medium">
              <p>{company}</p>
            </div>
            <div className="level-right">
              <p>{`${start} - ${end}`}</p>
            </div>
          </div>
        </h2>
        <div
          className="content"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        ></div>
      </section>
      {showDivider ? <hr className="divider" /> : <></>}
    </>
  );
}

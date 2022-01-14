import React from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import "./job.scss";

export default function Job({
  description,
  title,
  company,
  start,
  end,
  showDivider = false,
}) {
  const { width } = useWindowDimensions();

  let spacing = "mx-6 my-2 p-6";
  if (width > 768) {
    spacing = "mx-2 my-2 p-6";
  } else if (width > 480 && width <= 768) {
    spacing = "mx-2";
  } else if (width <= 480) {
    spacing = "";
  }

  return (
    <>
      <section className={`section ${spacing}`}>
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

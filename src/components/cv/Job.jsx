import { useMediaQuery } from "beautiful-react-hooks";
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
  // TODO: create context for media query breakpoints
  const isMobile = useMediaQuery("(max-width:480px)");
  const isTablet = useMediaQuery("(min-width:480px) and (max-width:768px)");
  const isMedium = useMediaQuery("(min-width:768px) and (max-width:1200px)");

  let spacing = "mx-6 my-2 p-6";
  if (isMedium) {
    spacing = "mx-2 my-2 p-6";
  } else if (isTablet) {
    spacing = "mx-2";
  } else if (isMobile) {
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

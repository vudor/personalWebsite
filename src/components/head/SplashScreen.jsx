import { StaticImage } from "gatsby-plugin-image";
import React, { useCallback, useEffect, useState } from "react";
import { Bounce, Flip } from "react-reveal";
import Typist from "react-typist";

const NBSP = "\xa0";
const INTERVAL_DURATION = 2500;

const imageSize = 180;
const borderRadius = 128;
const styles = {
  avatar: {
    flexShrink: 1,
    borderRadius,
    WebkitBorderRadius: borderRadius,
    display: "inline-block",
    border: "8px solid rgba(33,104,105, 0.5)",
    maxHeight: imageSize,
    minHeight: imageSize,
    maxWidth: imageSize,
    minWidth: imageSize,
  },
  text: {
    paddingLeft: "1em",
    display: "flex",
    flexGrow: 1,
    justifyContent: "center",
    flexDirection: "column",
  },
  noBreak: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
};

const image = (
  <StaticImage
    height={imageSize}
    width={imageSize}
    style={styles.avatar}
    imgStyle={{ borderRadius }}
    alt="Kevin Adams Profile Picture"
    src="../../images/profile.jpg"
  />
);

// eslint-disable-next-line react/prop-types
export default function SplashScreen({ entries, breakText = false }) {
  const [tech, setTech] = useState(entries[0]);

  const getRandomElement = useCallback(
    () =>
      // eslint-disable-next-line react/prop-types
      entries[Math.floor(Math.random() * entries.length)],
    [entries]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      let next = getRandomElement();
      while (next.label === tech.label) {
        next = getRandomElement();
      }
      setTech(next);
    }, INTERVAL_DURATION);
    return () => clearInterval(interval);
  }, [entries, tech]);

  const renderTextHighlighted = ({ label, logo }) => (
    <Flip bottom key={label}>
      <span style={styles.noBreak}>
        {logo}&nbsp;
        <Typist
          startDelay={400}
          className="has-text-primary inline-block"
          cursor={{ hideWhenDone: true, hideWhenDoneDelay: 0 }}
        >
          {label}
        </Typist>
      </span>
    </Flip>
  );

  return (
    <Bounce left>
      <h1 style={{display: "none"}}>Kevin Adam - the freelance Web-Developer ready for your next Project</h1>
      <div className="container">
        <div className="column is-narrow-desktop is-narrow-tablet is-full-mobile is-flex is-justify-content-center">
          {image}
        </div>
        <div className="columns">
          <div style={styles.text} className="column is-full-mobile">
            <p className="title is-size-1 has-text-centered">
              Hi! I&apos;m <span className="has-text-primary">Kevin</span>
            </p>
            <p className="subtitle is-size-4 has-text-centered">
              {`the Web-Developer ready for${NBSP}your${NBSP}next${NBSP}`}
              {breakText ? <br /> : ""}
              {renderTextHighlighted(tech)}
              {" Project."}
            </p>
          </div>
        </div>
      </div>
    </Bounce>
  );
}

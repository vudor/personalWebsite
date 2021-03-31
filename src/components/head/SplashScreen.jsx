import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useState } from "react";
import { Bounce, Flip } from "react-reveal";
import Typist from "react-typist";

const imageSize = 160;
const borderRadius = 128;
const styles = {
  avatar: {
    flexShrink: 1,
    borderRadius: borderRadius,
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
const INTERVAL_DURATION = 2200;
export default function SplashScreen({ entries, breakText = false }) {
  const [tech, setTech] = useState(entries[0]);

  useEffect(() => {
    const getRandomElement = () => {
      const randIndex = Math.floor(Math.random() * entries.length);
      return entries[randIndex];
    };

    const interval = setInterval(() => {
      let next = getRandomElement();
      while (next.label === tech.label) {
        next = getRandomElement();
      }
      setTech(next);
    }, INTERVAL_DURATION);
    return () => clearInterval(interval);
  }, [entries, tech]);

  const renderTextHighlighted = ({ label, logo }) => {
    return (
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
  };

  return (
    <Bounce left>
      <div className="container">
        <div className="columns">
          <div className="column is-narrow-desktop is-narrow-tablet is-full-mobile is-flex is-justify-content-center">
            <StaticImage
              height={imageSize}
              width={imageSize}
              style={styles.avatar}
              imgStyle={{ borderRadius }}
              alt="Profile Picture"
              src="../../images/profile.jpg"
            />
          </div>
          <div style={styles.text} className="column is-full-mobile">
            <p className="title is-size-1">
              Hi! I'm <span className="has-text-primary">Kevin</span>
            </p>
            <p className="subtitle is-size-4">
              {`the Web-Developer ready for your next `}
              {breakText ? <br /> : ""}
              {renderTextHighlighted(tech)}
              {` Project.`}
            </p>
          </div>
        </div>
      </div>
    </Bounce>
  );
}

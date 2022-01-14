import { useEffect, useState } from "react";

const globalWindow = typeof window !== "undefined" ? window : {};

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = globalWindow;
  return {
    width,
    height,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    globalWindow.addEventListener("resize", handleResize);
    return () => globalWindow.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

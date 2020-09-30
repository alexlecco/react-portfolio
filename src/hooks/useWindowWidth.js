import { useState, useEffect } from "react";

const getWindowWidth = () => {
  const { innerWidth: width } = window;
  return { width };
};

const useWindowWidth = () => {
  const [width, setWidth] = useState(getWindowWidth());

  useEffect(() => {
    const handleResize = () => {
      setWidth(getWindowWidth());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};

export default useWindowWidth;

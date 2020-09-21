import { useState, useEffect } from "react";

const getWindowWidth = () => {
  const { innerWidth: width } = window;
  return { width };
};

const useWindowWidth = () => {
  const [width, setWidths] = useState(getWindowWidth());

  useEffect(() => {
    const handleResize = () => {
      setWidths(getWindowWidth());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};

export default useWindowWidth;

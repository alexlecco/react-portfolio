import { useState, useEffect } from "react";

const getWindowHeight = () => {
  const { innerHeight: height } = window;
  return { height };
};

const useWindowHeight = () => {
  const [height, setHeight] = useState(getWindowHeight());

  useEffect(() => {
    const handleResize = () => {
      setHeight(getWindowHeight());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return height;
};

export default useWindowHeight;

import { useState, useEffect } from "react";

const useViewportWidth = () => {
  const [width, setWidth] = useState<number | undefined>();

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return [width];
};

export default useViewportWidth;

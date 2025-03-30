import { useState, useEffect } from "react";

const useScreenSize = (breakpoint) => {
  const [isLarge, setIsLarge] = useState(window.innerWidth > breakpoint);

  useEffect(() => {
    const handleResize = () => setIsLarge(window.innerWidth > breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isLarge;
};

export default useScreenSize;

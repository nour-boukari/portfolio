import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import SVGBackground from "./SVGBackground";

const SVGWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  overflow: hidden;
`;

const AnimatedBackground = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    if (svgRef.current) {
      const paths = svgRef.current.querySelectorAll("path");

      paths.forEach((path) => {
        const length = path.getTotalLength();

        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = length;

        path.style.setProperty("--delay", `${Math.random() * 1}s`);

        path.classList.add("animate-draw");
      });
    }
  }, []);

  return (
    <SVGWrapper>
      <SVGBackground ref={svgRef} />
    </SVGWrapper>
  );
};

export default AnimatedBackground;

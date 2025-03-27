import React, { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import styled from "styled-components";
import { SVG_PATHS } from "../../../consts/svgPaths";

const SVG = styled.svg`
  width: 100vw;
  height: auto;
  object-fit: cover;
`;

const SVGBackground = React.forwardRef((props, ref) => {
  const { theme } = useContext(ThemeContext);

  return (
    <SVG
      ref={ref}
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1350.000000 918.000000"
      preserveAspectRatio="xMidYMid slice"
    >
      <g
        transform="translate(0.000000,918.000000) scale(0.100000,-0.100000)"
        fill="none"
        stroke={theme.backgroundStrokeColor}
        strokeWidth="20"
        opacity="0.3"
        dangerouslySetInnerHTML={{ __html: SVG_PATHS }}
      ></g>
    </SVG>
  );
});

export default SVGBackground;

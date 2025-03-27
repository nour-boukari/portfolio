import { SVG_PATHS } from "../consts/svgPaths";

export const getEncodedSVG = (color = "#000000") => {
  const rawSVG = `
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1350 918" preserveAspectRatio="xMidYMid slice">
          <g
            transform="translate(0.000000,918.000000) scale(0.100000,-0.100000)"
            fill="${color}"
            opacity="0.1"
          >${SVG_PATHS}</g>
    </svg>`;

  return btoa(rawSVG);
};

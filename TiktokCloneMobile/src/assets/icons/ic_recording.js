import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    width="36px"
    height="36px"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.5 4H4.5C2.84315 4 1.5 5.34315 1.5 7V13C1.5 14.6569 2.84315 16 4.5 16H11.5C13.1569 16 14.5 14.6569 14.5 13V7C14.5 5.34315 13.1569 4 11.5 4ZM3.5 7C3.5 6.44772 3.94772 6 4.5 6H11.5C12.0523 6 12.5 6.44772 12.5 7V13C12.5 13.5523 12.0523 14 11.5 14H4.5C3.94772 14 3.5 13.5523 3.5 13V7Z"
      fill="#000000"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.9339 5.17564L13.4659 7.55708C13.1971 7.74161 13.0352 8.04554 13.032 8.37151L13 11.5867C12.9967 11.9197 13.1594 12.2325 13.4339 12.421L16.9339 14.8244C17.5975 15.28 18.5 14.8049 18.5 14V6C18.5 5.19508 17.5975 4.72 16.9339 5.17564ZM16.5 12.1003L15.0052 11.0739L15.0267 8.91141L16.5 7.89974V12.1003Z"
      fill="#000000"
    />
  </Svg>
);
export default SVGComponent;

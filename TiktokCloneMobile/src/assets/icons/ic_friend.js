import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
const FriendIcon = (props) => (
  <Svg
    width="800px"
    height="800px"
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    strokeWidth={3}
    stroke="#000000"
    fill="none"
    {...props}
  >
    <Circle cx={22.83} cy={22.57} r={7.51} />
    <Path d="M38,49.94a15.2,15.2,0,0,0-15.21-15.2h0a15.2,15.2,0,0,0-15.2,15.2Z" />
    <Circle cx={44.13} cy={27.22} r={6.05} />
    <Path d="M42.4,49.94h14A12.24,12.24,0,0,0,44.13,37.7h0a12.21,12.21,0,0,0-5.75,1.43" />
  </Svg>
);
export default FriendIcon;

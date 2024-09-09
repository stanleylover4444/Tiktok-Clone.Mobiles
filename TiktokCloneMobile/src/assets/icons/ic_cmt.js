import * as React from "react";
import Svg, { Path } from "react-native-svg";
const CommentIcon = (props) => (
  <Svg
    fill="white"
    width="36px"
    height="36px"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    {...props}
  >
    <Path d="M12,2C6.5,2,2,6.5,2,12c0,2.3,0.8,4.5,2.3,6.3l-2,2c-0.4,0.4-0.4,1,0,1.4C2.5,21.9,2.7,22,3,22h9c5.5,0,10-4.5,10-10S17.5,2,12,2z M8,13c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S8.6,13,8,13z M12,13c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S12.6,13,12,13z M16,13c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S16.6,13,16,13z" />
  </Svg>
);
export default CommentIcon;

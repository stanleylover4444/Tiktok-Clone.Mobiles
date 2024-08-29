import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */
const IcLock = (props) => (
  <Svg
    fill="#000000"
    width="24px"
    height="24px"
    viewBox="-64 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M96 416Q83 416 74 407 64 397 64 384L64 224Q64 211 74 202 83 192 96 192L96 160Q96 98 144 76 168 65 191 65 231 65 260 92 288 118 288 161L288 192Q302 192 311 201 320 210 320 224L320 384Q320 398 311 407 302 416 288 416L96 416ZM241 160Q241 140 227 127 213 114 192 114 172 114 159 128 145 141 145 160L144 224 241 224 241 160Z" />
  </Svg>
);
export default IcLock;

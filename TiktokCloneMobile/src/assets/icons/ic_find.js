import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SearchIcon = (props) => (
  <Svg
    fill="#FFFFFF" // Đặt màu sắc của toàn bộ biểu tượng là trắng
    width="24px"
    height="24px"
    viewBox="-2.5 -2.5 24 24"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMinYMin"
    className="jam jam-search"
    {...props}
  >
    <Path d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zm6.32-1.094l3.58 3.58a1 1 0 1 1-1.415 1.413l-3.58-3.58a8 8 0 1 1 1.414-1.414z" />
  </Svg>
);

export default SearchIcon;

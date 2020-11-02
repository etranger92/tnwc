import React from "react";
import { IconContext } from "react-icons";
import { FaAngleUp } from "react-icons/fa";
import "./icon.css";
//https://react-icons.github.io/react-icons/icons?name=fa

const IconHangleUp: React.FC = () => {
  return (
    <IconContext.Provider value={{ className: "icon_angle" }}>
      <FaAngleUp />
    </IconContext.Provider>
  );
};
export default IconHangleUp;

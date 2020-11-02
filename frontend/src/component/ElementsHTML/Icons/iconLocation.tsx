import React from "react";
import { IconContext } from "react-icons";
import { FaLocationArrow } from "react-icons/fa";
import "./icon.css";
//https://react-icons.github.io/react-icons/icons?name=fa

const IconLocation: React.FC = () => {
  return (
    <IconContext.Provider value={{ className: "icon_Location" }}>
      <FaLocationArrow />
    </IconContext.Provider>
  );
};
export default IconLocation;

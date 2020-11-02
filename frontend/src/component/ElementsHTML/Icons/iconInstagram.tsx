import React from "react";
import { IconContext } from "react-icons";
import { FaInstagram } from "react-icons/fa";
import "./icon.css";
//https://react-icons.github.io/react-icons/icons?name=fa

const IconInstagram: React.FC = () => {
  return (
    <IconContext.Provider value={{ className: "icon_instagram" }}>
      <FaInstagram />
    </IconContext.Provider>
  );
};
export default IconInstagram;

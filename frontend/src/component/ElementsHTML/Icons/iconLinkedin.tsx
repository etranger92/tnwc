import React from "react";
import { IconContext } from "react-icons";
import { FaLinkedin } from "react-icons/fa";
import "./icon.css";
//https://react-icons.github.io/react-icons/icons?name=fa

const IconLinkedin: React.FC = () => {
  return (
    <IconContext.Provider value={{ className: "icon_Linkedin" }}>
      <FaLinkedin />
    </IconContext.Provider>
  );
};
export default IconLinkedin;

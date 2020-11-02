import React from "react";
import { IconContext } from "react-icons";
import { FaFacebook } from "react-icons/fa";
import "./icon.css";
//https://react-icons.github.io/react-icons/icons?name=fa

const IconFacebook: React.FC = () => {
  return (
    <IconContext.Provider value={{ className: "icon_facebook" }}>
      <FaFacebook />
    </IconContext.Provider>
  );
};
export default IconFacebook;

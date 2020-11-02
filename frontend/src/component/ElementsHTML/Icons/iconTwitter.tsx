import React from "react";
import { IconContext } from "react-icons";
import { FaTwitter } from "react-icons/fa";
import "./icon.css";
//https://react-icons.github.io/react-icons/icons?name=fa

const IconTwitter: React.FC = () => {
  return (
    <IconContext.Provider value={{ className: "icon_twitter" }}>
      <FaTwitter />
    </IconContext.Provider>
  );
};
export default IconTwitter;

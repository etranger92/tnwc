import React from "react";
import { IconContext } from "react-icons";
import { FaGoogle } from "react-icons/fa";
import "./icon.css";
//https://react-icons.github.io/react-icons/icons?name=fa

const IconGoogle: React.FC = () => {
  return (
    <IconContext.Provider value={{ className: "icon_facebook" }}>
      <FaGoogle />
    </IconContext.Provider>
  );
};
export default IconGoogle;

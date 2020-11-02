import React from "react";
import { IconContext } from "react-icons";
import { FaPhoneAlt } from "react-icons/fa";
import "./icon.css";
//https://react-icons.github.io/react-icons/icons?name=fa

const IconPhone: React.FC = () => {
  return (
    <IconContext.Provider value={{ className: "icon_Phone" }}>
      <FaPhoneAlt />
    </IconContext.Provider>
  );
};
export default IconPhone;

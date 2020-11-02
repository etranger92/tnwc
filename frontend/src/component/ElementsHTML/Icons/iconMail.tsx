import React from "react";
import { IconContext } from "react-icons";
import { HiOutlineMail } from "react-icons/hi";
import "./icon.css";
//https://react-icons.github.io/react-icons/icons?name=fa

const IconMail: React.FC = () => {
  return (
    <IconContext.Provider value={{ className: "icon_Mail" }}>
      <HiOutlineMail />
    </IconContext.Provider>
  );
};
export default IconMail;

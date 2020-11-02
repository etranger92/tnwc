/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { IconContext } from "react-icons";
import { FaRegTimesCircle } from "react-icons/fa";
import "./icon.css";
//https://react-icons.github.io/react-icons/icons?name=fa

type TProps = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  //  clickEvent: Function;
};
// eslint-disable-next-line no-unused-vars
const IconCross: React.FC<TProps> = (props) => {
  //const { clickEvent } = props;
  return (
    <IconContext.Provider value={{ className: "icon_cross" }}>
      <div>
        <FaRegTimesCircle /*onClick={() => clickEvent()}*/ />
      </div>
    </IconContext.Provider>
  );
};
export default IconCross;

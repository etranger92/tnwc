/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { IconContext } from "react-icons";
import { FaAngleDown } from "react-icons/fa";
import "./selectOption.css";
//https://react-icons.github.io/react-icons/icons?name=fa

type TProps = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  //  clickEvent: Function;
};
// eslint-disable-next-line no-unused-vars
const SelectOption: React.FC<TProps> = (props) => {
  const [displayOption, setDisplayOption] = useState(false);
  const [classAngleDown, setClassAngle] = useState("");
  const options = [
    "QTLS",
    "AET",
    "CET",
    "DET",
    "CHILD CARE (LVL 2)",
    "CHILD CARE (LVL 3)",
  ];
  const [value, setValue] = useState(options[0]);
  //We remove the first index[0] otherwise it will appear double in the selection and option.
  options.shift();

  const courseSelected = (e: any) => {
    setDisplayOption(!displayOption);
    //We get the child span and his value.
    const spanValue = e.currentTarget.children[0];
    const actuelValue = spanValue.textContent;
    //We replace the value with the previous one
    spanValue.textContent = value;
    //we display the new value
    setValue(actuelValue);
  };
  //const { clickEvent } = props;
  return (
    <div
      id="select-option"
      onMouseEnter={() => {
        setDisplayOption(true);
        setClassAngle("rotate_angle");
      }}
      onMouseLeave={() => {
        setClassAngle("");
        setDisplayOption(false);
      }}
    >
      <div id="select-option-courses">
        <span> {value}</span>
        <span>
          {" "}
          <IconContext.Provider value={{ className: classAngleDown }}>
            <FaAngleDown />
          </IconContext.Provider>
        </span>
      </div>
      <ul id="option-course-container" data-name="selection">
        {options.map((option, index) => (
          <li
            key={"option" + index}
            className={`
          ${displayOption ? "display_option_courses" : ""}`}
            onClick={courseSelected}
          >
            {" "}
            <span>{option}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SelectOption;

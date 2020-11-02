import React, { useState } from "react";
import "./menu.css";
type Props = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  whichMenu: Function;
};
const MenuFeatureCourse: React.FC<Props> = (props) => {
  const [indice, setIndice] = useState("description");
  // eslint-disable-next-line react/prop-types
  const { whichMenu } = props;
  const menuTitle = [
    "Description",
    "Curriculum",
    "Faq",
    "Announcement",
    /*"Reviews",*/
  ];
  const styleOnSelect = (indiceKey: string) => {
    setIndice(indiceKey);
  };
  const menuList = menuTitle.map((title, index) => {
    return (
      <li
        key={"menu" + index}
        onClick={() => {
          whichMenu(title);
          styleOnSelect("menu" + index);
        }}
        className={indice == "menu" + index ? "menu_active" : ""}
      >
        {" "}
        <h3>{title}</h3>
      </li>
    );
  });

  return (
    <>
      <ul id="menu-list">{menuList}</ul>
    </>
  );
};

export default MenuFeatureCourse;

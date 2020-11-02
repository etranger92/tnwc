import React from "react";
import "../navigation.css";
import { NavLink } from "react-router-dom";
import IconHome from "../../ElementsHTML/Icons/IconHome";
import { HashLink } from "react-router-hash-link";

type Props = {
  isItClicked: boolean;
  scroll?: boolean;
  // eslint-disable-next-line @typescript-eslint/ban-types
  clickEvent?: Function;
};
type TStyle = {
  opacity: number;
};
const NavBar: React.FC<Props> = (props) => {
  // eslint-disable-next-line react/prop-types
  const { isItClicked, scroll, clickEvent } = props;
  //When the nav scrole up we want to add a slight effect of disparition
  const style: TStyle = {
    opacity: 0,
  };
  return (
    <ul style={!isItClicked ? style : {}} id="nav-bar">
      <li>
        {" "}
        <HashLink
          to={"/#home"}
          onClick={() => {
            if (clickEvent) {
              clickEvent();
            }
            return;
          }}
        >
          {" "}
          Home
        </HashLink>
      </li>
      <li>
        {" "}
        <HashLink
          to={"/#display-article-course"}
          onClick={() => {
            if (clickEvent) {
              clickEvent();
            }
            return;
          }}
        >
          {" "}
          Course
        </HashLink>
      </li>
      <li>
        {" "}
        <NavLink
          to={"https://www.thenorthwestcollege.com/"}
          onClick={() => {
            if (clickEvent) {
              clickEvent();
            }
            return;
          }}
        >
          <IconHome effect={scroll} />
        </NavLink>
      </li>
      <li>
        {" "}
        <HashLink
          to={"/#inscription"}
          onClick={() => {
            if (clickEvent) {
              clickEvent();
            }
            return;
          }}
        >
          {" "}
          Inscription
        </HashLink>
      </li>
      <li>
        {" "}
        <HashLink
          to={"/#footer"}
          onClick={() => {
            if (clickEvent) {
              clickEvent();
            }
            return;
          }}
        >
          {" "}
          Contact
        </HashLink>
      </li>
    </ul>
  );
};

export default NavBar;

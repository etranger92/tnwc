import React from "react";
import "./burger.css";

//clickEvent
type Props = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  clickEvent: Function;
  isItClicked: boolean;
};
const Burger: React.FC<Props> = (props) => {
  // eslint-disable-next-line react/prop-types
  const { clickEvent, isItClicked } = props;

  return (
    <div
      data-testid="no-classes"
      id="burger"
      onClick={() => clickEvent()}
      className={isItClicked ? "cross" : ""}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Burger;

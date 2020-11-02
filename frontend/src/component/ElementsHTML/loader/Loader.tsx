/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import "./loader.css";

type TProps = {
  color?: string;
};
// eslint-disable-next-line no-unused-vars
const Loader: React.FC<TProps> = (props) => {
  //const { clickEvent } = props;
  return (
    <div id="loader">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
export default Loader;

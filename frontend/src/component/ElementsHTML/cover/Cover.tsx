import React from "react";
import IconHome from "../Icons/IconHome";
import "./cover.css";
//https://react-icons.github.io/react-icons/icons?name=fa

type Props = {
  loader: boolean;
};
const Cover: React.FC<Props> = (props) => {
  // eslint-disable-next-line react/prop-types
  const { loader } = props;
  return (
    <div id="cover-load" className={loader ? "hide_loader" : ""}>
      <IconHome />
    </div>
  );
};
export default Cover;

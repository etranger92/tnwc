/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

//https://react-icons.github.io/react-icons/icons?name=fa

type TProps = {
  rowsIndice: number;
  colsIndice: number;
  placeHolder: string;
};
// eslint-disable-next-line no-unused-vars
const TextArea: React.FC<TProps> = (props) => {
  const { rowsIndice, colsIndice, placeHolder } = props;
  return (
    <textarea
      rows={rowsIndice}
      cols={rowsIndice}
      placeholder={placeHolder}
      data-name="txtarea"
    />
  );
};
export default TextArea;

/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import "./slider.css";
import header0 from "../../../image/header/header0.jpg";
import header1 from "../../../image/header/header1.jpg";

//https://react-icons.github.io/react-icons/icons?name=fa

type TProps = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  //  clickEvent: Function;
};
// eslint-disable-next-line no-unused-vars
const SliderOne: React.FC<TProps> = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [number, setNumbers] = useState(0);

  useEffect(() => {
    let indice = 0;
    const interval = setInterval(() => {
      indice = indice < 1 ? indice + 1 : 0;
      // eslint-disable-next-line no-unused-vars
      setNumbers((number) => indice);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  const classZoom = ["zoom_in", "zoom_out"];
  const imgs = [{ image: header0 }, { image: header1 }];
  const selectImg = () => imgs[number].image;
  const selectZoom = () => classZoom[number];

  return (
    <div id="slider-one">
      <div id="slider-one-img-container">
        <img className={selectZoom()} src={selectImg()} alt="header" />
      </div>
    </div>
  );
};
export default SliderOne;

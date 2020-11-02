/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import "./slider.css";
import success0 from "../../../image/Success/success0.jpg";
import success1 from "../../../image/Success/success1.jpg";
import success2 from "../../../image/Success/success2.jpg";

//https://react-icons.github.io/react-icons/icons?name=fa

type TProps = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  //  clickEvent: Function;
};
// eslint-disable-next-line no-unused-vars
const SliderTwo: React.FC<TProps> = (props) => {
  //const { clickEvent } = props;
  // eslint-disable-next-line no-unused-vars
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let indice = 0;
    const interval = setInterval(() => {
      indice = indice < 2 ? indice + 1 : 0;
      // eslint-disable-next-line no-unused-vars
      setSeconds((seconds) => indice);
    }, 100000);
    return () => clearInterval(interval);
  }, []);

  // eslint-disable-next-line no-unused-vars

  const textH1 = ["Come here", "right there", "tmrw"];
  const textH2 = ["Monday", "Tuesday", "Wednesday"];
  const imgs = [{ image: success0 }, { image: success1 }, { image: success2 }];
  const selectH1 = () => textH1[0];
  const selectH2 = () => textH2[0];
  const selectImg = () => imgs[0].image;

  return (
    <div id="slider-one">
      <img className={"scale_animation"} src={selectImg()} alt="Success" />
      <h1>{selectH1()}</h1>
      <h2>{selectH2()}</h2>
    </div>
  );
};
export default SliderTwo;

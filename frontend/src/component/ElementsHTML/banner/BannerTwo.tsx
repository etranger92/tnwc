/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import CirclePercent from "../circlePercentage/circular";

//import { Divider } from "semantic-ui-react";
import "./banner.css";

type Props = {
  bannerTwo: any;
};
const BannerTwo: React.FC<Props> = (props) => {
  const { bannerTwo } = props;
  const divRef = React.useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [scrollIndice, setScroll] = useState<boolean>(false);
  const handleScroll = () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const positionDiv = divRef.current!.getBoundingClientRect().top;
    if (250 > positionDiv) {
      setScroll(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="banner-two" ref={divRef}>
      <h1> {bannerTwo.title}</h1>
      <h3>{bannerTwo.subTitle}</h3>
      <section className="circle_component">
        {bannerTwo.circles.map(
          (
            circle: { indice: number; color: string; value: string },
            index: string
          ) => (
            <article key={"circle" + index}>
              <CirclePercent
                values={circle.indice}
                color={circle.color}
                visibility={scrollIndice}
              />
              <span> {circle.value} </span>
            </article>
          )
        )}
      </section>
    </section>
  );
};

export default BannerTwo;

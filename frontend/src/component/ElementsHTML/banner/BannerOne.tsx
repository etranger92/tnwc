/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./banner.css";

type Props = {
  title: string;
  span: string;
};
const BannerOne: React.FC<Props> = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title, span } = props;
  return (
    <section id="banner-one">
      <article>
        <h1>{title}</h1>
        <span>— {span}</span>
      </article>
    </section>
  );
};

export default BannerOne;

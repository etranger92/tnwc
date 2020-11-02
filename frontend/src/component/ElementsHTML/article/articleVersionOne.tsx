/* eslint-disable react/prop-types */
/*/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./articles.css";

type Props = {
  img: any;
  alt: string;
  content: string;
  title: string;
};
const ArticleVersionOne: React.FC<Props> = (props) => {
  return (
    <article>
      <div className="art_img_container">
        <img src={props.img} alt={props.alt} />
      </div>
      <div className="art_course_description">
        <h5>{props.title}</h5>
        <p>{props.content}</p>
        <div className="art_course_link">
          {" "}
          <span>Learn more</span>
        </div>
      </div>
    </article>
  );
};
export default ArticleVersionOne;

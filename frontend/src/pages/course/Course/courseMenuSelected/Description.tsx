/* eslint-disable react/prop-types */
import React from "react";
import "./courseMenuSelected.css";

type NewType = {
  coursePicked: any;
};
type Props = NewType;

//Parent CoursesArticle
const DescriptionCourse: React.FC<Props> = (props) => {
  // eslint-disable-next-line react/prop-types
  const { coursePicked } = props;
  const details = coursePicked.generalThems.map(
    (element: { question: string; answer: any; list?: any }, index: number) => {
      return (
        <div className="description_points" key={"them" + index}>
          <h2> {element.question}</h2>
          <div className="description_answer">
            {element.answer.map((response: React.ReactNode, index: number) => {
              return <p key={"response" + index}> {response}</p>;
            })}
            <ul>
              {element.list &&
                element.list.map((li: string, index: number) => (
                  <li key={"li" + index}> {li} </li>
                ))}{" "}
            </ul>
          </div>
        </div>
      );
    }
  );

  return (
    <section id="course-content">
      <div id="course-title">
        <h1> {coursePicked.title} </h1>
      </div>
      <div id="course-img">
        <img src={coursePicked.img} alt={coursePicked.alt} />
      </div>

      <div id="description-general">{details}</div>
    </section>
  );
};

export default DescriptionCourse;

/* eslint-disable react/prop-types */
import React from "react";
import "./courseMenuSelected.css";
import { FaAngleDown } from "react-icons/fa";
import { IconContext } from "react-icons";

type NewType = {
  coursePicked: any;
  title: string;
};

type Props = NewType;
const Faq: React.FC<Props> = (props) => {
  const { coursePicked, title } = props;

  // Note: was too complicated to use the react way (with key) to add or remove a class as I have nested array.
  const handleClick = (e: any) => {
    const para = e.currentTarget.parentElement.lastChild;
    const icon = e.currentTarget.lastChild;
    if (para.classList.contains("para_appear")) {
      para.classList.remove("para_appear");
      icon.classList.remove("curriculum_icon_rotate");
      return;
    } else {
      icon.classList.add("curriculum_icon_rotate");
      para.classList.add("para_appear");
      return;
    }
  };

  const presentationDisplayed = coursePicked.map(
    (
      element: { question: React.ReactNode; answer: React.ReactNode },
      index: string
    ) => {
      return (
        <div key={"question" + index} className="faq_container">
          <div className="faq_question" onClick={handleClick}>
            <h4> {element.question} </h4>
            <IconContext.Provider value={{ className: "curriculum_icon" }}>
              <FaAngleDown />
            </IconContext.Provider>
          </div>
          <p>{element.answer}</p>
        </div>
      );
    }
  );
  return (
    <section id="faq" className={"course_margin_top"}>
      {presentationDisplayed}
      <p className="course_reminder">{title}</p>
    </section>
  );
};

export default Faq;

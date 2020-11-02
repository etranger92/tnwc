/* eslint-disable react/prop-types */
import React from "react";
import "./courseMenuSelected.css";
import { FaAngleDown } from "react-icons/fa";
import { IconContext } from "react-icons";
type Props = {
  coursePicked: any;
};
const CurriculumCourse: React.FC<Props> = (props) => {
  // eslint-disable-next-line react/prop-types
  const { coursePicked } = props;

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
  const presentationDisplayed = () => {
    return (
      <div className="sub_curriculum course_maring_top">
        {" "}
        {coursePicked.detail.map(
          (
            detail: { title: React.ReactNode; content: React.ReactNode },
            indexo: string
          ) => (
            <div
              key={"subCourse" + indexo}
              className="sub_curriculum_description"
            >
              {" "}
              <div className="sub_curr_title" onClick={handleClick}>
                <div className="title_container">
                  <h4> {detail.title}</h4>
                </div>
                <IconContext.Provider value={{ className: "curriculum_icon" }}>
                  <FaAngleDown />
                </IconContext.Provider>
              </div>
              <p>{detail.content} </p>
            </div>
          )
        )}
        <p className="course_reminder">{coursePicked.section}</p>
      </div>
    );
  };
  return <section id="curriculum">{presentationDisplayed()}</section>;
};

export default CurriculumCourse;

/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { connect } from "react-redux";
import "./course.css";
import Announcement from "./courseMenuSelected/Announcement";
import CurriculumCourse from "./courseMenuSelected/Curriculum";
import DescriptionCourse from "./courseMenuSelected/Description";
import Faq from "./courseMenuSelected/Faq";
import MenuFeatureCourse from "./Menu/MenuCourse";

type Props = {
  courseIndice?: string;
  courses: any;
};

//Props origin: ArticleCourse
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CoursePresentation: React.FC<Props> = (props) => {
  const [indice, setIndice] = useState("description");
  //We select the course picked.
  const handleClick = (title: string) => {
    setIndice(title.toLocaleLowerCase());
  };
  const courseChosen = props.courses.filter(
    (course: any) => course.course === props.courseIndice
  )[0];

  return (
    <>
      <section id="course-container">
        <div id="course">
          <h1 id="course-title">
            {" "}
            <span> Course/Presentation </span>
          </h1>
          <MenuFeatureCourse whichMenu={handleClick} />
          {indice === "description" && (
            <DescriptionCourse
              coursePicked={courseChosen.details.description}
            />
          )}
          {indice === "curriculum" && (
            <CurriculumCourse coursePicked={courseChosen.details.curriculum} />
          )}
          {indice === "faq" && (
            <Faq
              coursePicked={courseChosen.details.faq}
              title={courseChosen.details.curriculum.section}
            />
          )}
          {indice === "announcement" && (
            <Announcement coursePicked={courseChosen.details.announcement} />
          )}
        </div>
      </section>
    </>
  );
};

const mapStateToProps = (state: { course: any }) => {
  return {
    courses: state.course,
  };
};

export default connect(mapStateToProps)(CoursePresentation);

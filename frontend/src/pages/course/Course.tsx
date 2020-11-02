import React, { useEffect } from "react";
import Navigation from "../../component/Navigation/Navigation";
import "./course.css";
import CoursePresentation from "./Course/CoursePresentation";

//Props parent : ArticleCourse page home
type Props = {
  state: string;
  location: any;
};
const Course: React.FC<Props> = (props) => {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, []);
  // eslint-disable-next-line react/prop-types
  const coursePicked = props.location.state;

  return (
    <div id="course-page">
      {" "}
      <Navigation classNav={"nav_desktop_on_scroll"} />
      <CoursePresentation courseIndice={coursePicked} />
    </div>
  );
};

export default Course;

/* eslint-disable react/prop-types */
import React from "react";
import "./display.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ArticleVersionOne from "../../../component/ElementsHTML/article/articleVersionOne";

type TCourses = {
  course: string;
  article: { title: string; content: string; image: any; alt: string };
}[];
type TCourse = {
  course: string;
  article: { title: string; content: string; image: any; alt: string };
};
type Props = {
  courses: TCourses;
};
const ArticlesCourse: React.FC<Props> = (props) => {
  return (
    <section id="display-article-course">
      {props.courses.map((course: TCourse, index: number) => (
        <Link
          key={"article" + index}
          to={{
            pathname: "/courses",
            state: course.course,
          }}
          className="article_link_container"
        >
          <ArticleVersionOne
            img={course.article.image}
            alt={course.article.alt}
            title={course.article.title}
            content={course.article.content}
          />
        </Link>
      ))}
    </section>
  );
};

const mapStateToProps = (state: { course: any }) => {
  return {
    courses: state.course,
  };
};

export default connect(mapStateToProps)(ArticlesCourse);

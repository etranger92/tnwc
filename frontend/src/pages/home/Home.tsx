import React from "react";
import { connect } from "react-redux";
//import AnnounceOne from "../../component/ElementsHTML/announce/Announce";
import BannerOne from "../../component/ElementsHTML/banner/BannerOne";
import BannerTwo from "../../component/ElementsHTML/banner/BannerTwo";
import Header from "../../component/Header/Header";
import Presentation from "./Presentation/Presentation";
import ArticlesCourse from "./courseArticle/ArticleCourse";
import "./home.css";
import Inscription from "./Inscription/Inscription";
import SliderOne from "../../component/ElementsHTML/slider/SliderOne";
import Navigation from "../../component/Navigation/Navigation";

const Home: React.FC = () => {
  const bannerOne = {
    title:
      "“The mediocre teacher tells. The good teacher explains. The superior teacher demonstrates. The great teacher inspires.”",
    span: "William Arthur Ward",
  };
  const bannerTwo = {
    title: "The Best Place For Learning",
    subTitle:
      " We pride ourselves on providing the most up-to-date content for our students to learn each course.",
    circles: [
      { indice: 92, value: "Attendance", color: "rgb(198, 59, 66, .7)" },
      { indice: 97, value: "Satisfaction", color: "rgb(128, 128, 128, .7)" },
      { indice: 96, value: "Course", color: "rgb(193, 172, 62, .7)" },
      { indice: 95, value: "Flexibility", color: "rgb(255, 255, 255, .7)" },
    ],
  };

  return (
    <div id="home">
      <Navigation />
      <SliderOne />
      <Presentation />
      <BannerOne title={bannerOne.title} span={bannerOne.span} />
      {/*<AnnounceOne />*/}
      <ArticlesCourse />
      <BannerTwo bannerTwo={bannerTwo} />
      <Inscription />
    </div>
  );
};

const mapStateToProps = (state: { course: any }) => {
  return {
    courses: state.course,
  };
};

export default connect(mapStateToProps)(Home);

/*window.location.reload()*/

/* eslint-disable react/no-unescaped-entities */
import React from "react";
import IconFacebook from "../ElementsHTML/Icons/iconFacebook";
import IconInstagram from "../ElementsHTML/Icons/iconInstagram";
import IconLinkedin from "../ElementsHTML/Icons/iconLinkedin";
import IconLocation from "../ElementsHTML/Icons/iconLocation";
import IconMail from "../ElementsHTML/Icons/iconMail";
import IconPhone from "../ElementsHTML/Icons/iconPhone";
import IconTwitter from "../ElementsHTML/Icons/iconTwitter";
import NavBar from "../Navigation/NavBar/NavBar";
import aet from "../../image/course/aet.png";
import cet from "../../image/course/cet.jpg";
import det from "../../image/course/det.jpg";
import qtls from "../../image/course/qtls.jpg";
import "./footer.css";

const Footer: React.FC = () => {
  return (
    <div id="footer">
      <div id="footer-container-one">
        <div className="footer_sub_container">
          <h2>Courses</h2>{" "}
          <div className="footer_course">
            <div className="footer_course_img">
              {" "}
              <img src={aet} alt="education and training" />
            </div>
            <p>AET</p>
          </div>
          <div className="footer_course">
            <div className="footer_course_img">
              {" "}
              <img src={cet} alt="education and training" />
            </div>
            <p>CET</p>
          </div>
          <div className="footer_course">
            <div className="footer_course_img">
              {" "}
              <img src={det} alt="education and training" />
            </div>
            <p>DET</p>
          </div>
          <div className="footer_course">
            <div className="footer_course_img">
              {" "}
              <img src={qtls} alt="teacher status" />
            </div>
            <p>QTLS</p>
          </div>
        </div>
        <div className="footer_sub_container">
          <h2>About</h2>{" "}
          <p>
            The N.W.C is a leading 21st century Awarding Organisation founded to
            meet the developing education and training needs of learners and
            employers from the UK and around the globe.
          </p>
        </div>
        <div className="footer_sub_container">
          <h2>Follow us</h2>
          <p>Coming soon</p>
        </div>
        <div className="footer_sub_container">
          {" "}
          <h2>Find us </h2>
          <p>Feel free to contact us and we will be back at you. </p>
          <ul id="footer-contact">
            <li>
              <IconLocation /> <p>England</p>
            </li>
            <li>
              {" "}
              <IconPhone />
              <p>07751593970</p>
            </li>
            <li>
              {" "}
              <IconMail />
              <p>admin@thenorthwestcollege.co.uk</p>
            </li>
          </ul>
        </div>
      </div>
      <div id="footer-container-two">
        <NavBar isItClicked={true} />
        <p>Copyright @2020 | Designed by N.S</p>
        <ul>
          <li>
            <IconFacebook />
          </li>
          <li>
            <IconTwitter />
          </li>
          <li>
            <IconInstagram />
          </li>
          <li>
            <IconLinkedin />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

/* eslint-disable react/prop-types */
import React from "react";
import "./courseMenuSelected.css";
type NewType = {
  coursePicked: any;
};

type Props = NewType;
const Announcement: React.FC<Props> = (props) => {
  // eslint-disable-next-line react/prop-types
  const { coursePicked } = props;
  // Note: was too complicated to use the react way (with key) to add or remove a class as I have nested array.
  const presentationDisplayed = () => {
    return (
      <div className="announcement_container course_margin_top">
        {coursePicked.details.map(
          (
            detail: { title: string; announcement: string },
            index: number | null | undefined
          ) => (
            <div key={"announcement" + index} className="announcement_point">
              <h3>{detail.title}</h3>
              <p>{detail.announcement}</p>
            </div>
          )
        )}
        <p className="course_reminder">{coursePicked.mainTitle}</p>
      </div>
    );
  };
  return <section id="announcement">{presentationDisplayed()}</section>;
};

export default Announcement;

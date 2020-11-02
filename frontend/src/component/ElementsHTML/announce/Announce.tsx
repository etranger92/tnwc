/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import "./announce.css";

const AnnounceOne: React.FC = () => {
  const [scroll, setScroll] = useState(false);
  const divRef = React.useRef<HTMLDivElement>(null);
  const handleScroll = () => {
    //need to add a ref to the element targeted as well.
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const positionDiv: number = divRef.current!.getBoundingClientRect().top;

    if (270 > positionDiv) {
      setScroll(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <section id="announce-one">
      <article>
        <div id="sub-announce-one" ref={divRef}>
          <h4 className={scroll ? "fade_left_1" : ""}>
            Friday 16th October 2020 at 10am
          </h4>
          <h1 className={scroll ? "fade_left_2" : ""}>Virtual open day</h1>
        </div>
        <div
          id="sub-announce-two"
          className={scroll ? "max_height_effect" : ""}
        >
          <div className="sub_announce_two">
            <h4>First part</h4>
            <div className="sub_announce_two_paragraph">
              <p>Introduction to education and training</p>
              <p>Certificate in education and training</p>
              <p>Diploma in education and training</p>
            </div>
          </div>
          <div className="sub_announce_two">
            {" "}
            <h4> Second part </h4>
            <div className="sub_announce_two_paragraph">
              <p>Top-up degrees/spedification</p>
              <p>Qtls</p>
            </div>
          </div>
          <div className="sub_announce_two">
            {" "}
            <h4> Third part </h4>
            <div className="sub_announce_two_paragraph">
              <p>Questions</p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default AnnounceOne;

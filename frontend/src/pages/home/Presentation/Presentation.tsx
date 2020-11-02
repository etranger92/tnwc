import React from "react";
import { HashLink as LinkH } from "react-router-hash-link";
import "./presentation.css";

const Presentation: React.FC = () => {
  return (
    <section id="presentation-container">
      <article id="presentation">
        <h5>TO THE JOURNEY AHEAD</h5>
        <h1>The North West College</h1>
        <p>
          The N.W.C has been created by different teachers who aim to provide
          high quality teaching. They have been working for many years in
          different schools, colleges and universities but were never
          professionally fulfilled about the way they had to deliver or support
          their learners. When it comes to educating they have three words;
          engaging, adapting and mastering.
        </p>
        <LinkH to="/#inscription" className="link">
          Enrol
        </LinkH>
      </article>
    </section>
  );
};

export default Presentation;

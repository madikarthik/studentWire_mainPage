import React, { Component, Fragment } from "react";
import "./about.css";
import about from "../../Assets/Img/about.svg";

const About = () => {
  return (
    <Fragment>
      <div className="about-area">
        <div className="container ">
          <h1 style={{ fontFamily: "Cocogoose" }}>
            Wiring your college Community to Success
          </h1>
          <p
            style={{
              textAlign: "justify",
              fontFamily: "ComfortaaB",
              fontSize: "20px",
            }}
          >
            Wiring your college community through faster, user-friendly and
            transparent communication portal that boosts placements , eases
            recruitment logistics and college workflow
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default About;

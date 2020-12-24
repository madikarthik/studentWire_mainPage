import React, { Component, Fragment, useEffect } from "react";
import "./Hero_area.css";
import logo from "../../Assets/Img/Logo.png";

const Hero_area = () => {
  //   state = { scrolled: false };

  // useEffect(()=> {
  //     window.addEventListener("scroll", () => {
  //       const isTop = window.scrollY < 100;

  //       if (isTop !== true) {
  //         this.setState({ scrolled: true });
  //       } else {
  //         this.setState({ scrolled: false });
  //       }
  //     })});
  //   }

  return (
    <Fragment>
      <div className="hero-area">
        <div className="overlay">
          <span></span>
          <span></span>
        </div>
        <nav
          className="navbar navbar-expand-md fixed-top scrolling-navbar"
          style={{ padding: "10px 70px" }}
        >
          <a className="navbar-brand" href="#">
            <img src={logo} alt="logo" style={{ width: "250px" }} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link "
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link "
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container hero_text">
          <h1 style={{ fontFamily: "Cocogoose" }}>We Connect Better!</h1>
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

export default Hero_area;

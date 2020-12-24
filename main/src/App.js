import "./App.css";
import Footer from "./components/footer/Footer";
import logo from "./Assets/Img/Logo.png";
import f1 from "./Assets/Img/f1.png";
import f2 from "./Assets/Img/f2.png";
import f3 from "./Assets/Img/f3.png";
import f4 from "./Assets/Img/f4.png";
import f5 from "./Assets/Img/f5.png";
import f6 from "./Assets/Img/f6.png";

import { Fragment } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-scroll";
function App() {
  return (
    <Fragment>
      <Navbar expand="lg" sticky="top" style={{ background: "#fff" }}>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" style={{ width: "200px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <li className="nav-item">
              <Link
                to="hero"
                activeClass="active"
                className="nav-link"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                activeClass="active"
                className="nav-link"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="services"
                activeClass="active"
                className="nav-link"
                spy={true}
                smooth={true}
                offset={-20}
                duration={500}
              >
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contactUs"
                activeClass="active"
                className="nav-link"
                spy={true}
                smooth={true}
                offset={-20}
                duration={500}
              >
                Contact Us
              </Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="App">
        <div className="hero-area" id="hero">
          <div className="overlay">
            <span></span>
            <span></span>
          </div>

          <div className=" hero_text">
            <h1 style={{ fontFamily: "Cocogoose" }}>We Connect Better!</h1>
            <p style={{ fontSize: "20px" }}>
              Wiring your college community through faster, user-friendly and
              transparent communication portal that boosts placements , eases
              recruitment logistics and college workflow
            </p>
            <Button
              style={{
                background: "#FF9C00",
                border: "none",
                color: "white !important",
              }}
            >
              <Link
                to="contactUs"
                smooth={true}
                offset={-20}
                duration={500}
                style={{ color: "#fff !important" }}
              >
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
        <div className="about-area" id="about">
          <div className="my-auto">
            <div className="container ">
              <h1 style={{ fontFamily: "Cocogoose" }}>
                Wiring your college Community to Success
              </h1>
              <p className="para1">
                We help transform your students to be industry-ready, while
                maintaining their unique portfolios that describe thier skills,
                interests and experience.
              </p>
              <p className="para2">
                We understand the importance of each opportunity and strive to
                connect college communities online to make administration easy
                and communication effective, enabling all members of the college
                ecosystem to stay connected.
              </p>
            </div>
          </div>
        </div>
        <div className=" container services" id="services">
          <h1 style={{ textAlign: "center" }}>
            One platform for all your needs
          </h1>

          <center>
            <div className="service_itemBox">
              <div className="row service_items">
                <div className="col">
                  <div className="card lg-3">
                    <div className="row g-0">
                      <div className="col-lg-4">
                        <img src={f1} alt="..." style={{ width: "100px" }} />
                      </div>
                      <div className="col-lg-8">
                        <div className="card-body">
                          <h5 className="card-title">Announcements</h5>
                          <p className="card-text">
                            {" "}
                            Stay Connected & Stay Updated
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card lg-3">
                    <div className="row g-0">
                      <div className="col-lg-4">
                        <img src={f2} alt="..." style={{ width: "100px" }} />
                      </div>
                      <div className="col-lg-8">
                        <div className="card-body">
                          <h5 className="card-title">Discussions</h5>
                          <p className="card-text">We help you work as one.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card mb-3">
                    <div className="row g-0">
                      <div className="col-lg-4">
                        <img src={f3} alt="..." style={{ width: "70px" }} />
                      </div>
                      <div className="col-lg-8">
                        <div className="card-body">
                          <h5 className="card-title">Portfolio</h5>
                          <p className="card-text">
                            Be unique, we got your back!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row service_items">
                <div className="col">
                  <div className="card mb-3">
                    <div className="row g-0">
                      <div className="col-lg-4">
                        <img
                          src={f4}
                          alt="..."
                          style={{ width: "110px", padding: "10px" }}
                        />
                      </div>
                      <div className="col-lg-8">
                        <div className="card-body">
                          <h5 className="card-title">Search</h5>
                          <p className="card-text">
                            Connect with other students
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card mb-3">
                    <div className="row g-0">
                      <div className="col-lg-4">
                        <img
                          src={f5}
                          alt="..."
                          style={{ width: "130px", height: "97.58 !important" }}
                        />
                      </div>
                      <div className="col-lg-8">
                        <div className="card-body">
                          <h5 className="card-title">Courses</h5>
                          <p className="card-text">
                            Learn beyond your boundaries
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card mb-3">
                    <div className="row g-0">
                      <div className="col-lg-4">
                        <img src={f6} alt="..." style={{ width: "120px" }} />
                      </div>
                      <div className="col-lg-8">
                        <div className="card-body">
                          <h5 className="card-title">Alumni</h5>
                          <p className="card-text">
                            Keep track of your passouts
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </center>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;

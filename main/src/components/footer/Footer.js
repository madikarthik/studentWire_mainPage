import React, { Component, Fragment } from "react";
import "./footer.css";
import axios from "axios";
import light from "../../Assets/Img/Light.png";

class Footer extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    msg: "",
    sent: false,
  };

  //handle inputs
  handleName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handleEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  handlePhone = (e) => {
    this.setState({
      phone: e.target.value,
    });
  };
  handleMsg = (e) => {
    this.setState({
      msg: e.target.value,
    });
  };

  formSubmit = (e) => {
    e.preventDefault();

    let data = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      msg: this.state.msg,
    };

    axios.post("/api/form", data);

    this.setState(
      {
        sent: true,
      },
      this.resetForm()
    );
  };

  // for reseting data
  resetForm = () => {
    this.setState({
      name: "",
      email: "",
      phone: "",
      msg: "",
    });

    setTimeout(() => {
      this.setState({
        sent: false,
      });
    }, 3000);
  };

  render() {
    return (
      <Fragment>
        <div className="footer" style={{ height: "90vh" }} id="contactUs">
          <div className="container" style={{ paddingTop: "100px" }}>
            <h1 style={{ color: "#fff" }}>Contact Us</h1>
            <form onSubmit={this.formSubmit} style={{ paddingTop: "30px" }}>
              <div className="inputBox">
                <input
                  type="text"
                  name="name"
                  required="required"
                  value={this.state.name}
                  onChange={this.handleName}
                />
                <span className="text">Full Name</span>
                <span className="line"></span>
              </div>

              <div className="row ">
                <div className="col">
                  <div className="inputBox">
                    <input
                      type="text"
                      name="email"
                      required="required"
                      value={this.state.email}
                      onChange={this.handleEmail}
                    />
                    <span className="text">Email</span>
                    <span className="line"></span>
                  </div>
                </div>
                <div className="col">
                  <div className="inputBox">
                    <input
                      type="text"
                      name="phone"
                      required="required"
                      value={this.state.phone}
                      onChange={this.handlePhone}
                    />
                    <span className="text">Phone</span>
                    <span className="line"></span>
                  </div>
                </div>
              </div>

              <div className="inputBox tarea">
                <textarea
                  name="msg"
                  required="required"
                  value={this.state.msg}
                  onChange={this.handleMsg}
                ></textarea>
                <span className="msg">Message...</span>
                <span className="line"></span>
              </div>
              {/* <div className={this.state.sent ? "msg"}></div> */}
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
        <div
          className="last"
          style={{
            height: "10vh",
            background: "#000",
            textAlign: "center",
            paddingTop: "10px",
          }}
        >
          <img src={light} alt="light" style={{ width: "200px" }} />
        </div>
      </Fragment>
    );
  }
}

export default Footer;

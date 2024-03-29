import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Accordion, Card } from "react-bootstrap";
import axios from 'axios'
import { SketchPicker } from "react-color";
import { PageHeader, PageFooter } from "./header";
import Sidebarmenu from "./sidebar";
// import '../App.css';
import "../styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

class UninstallScreen extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(
      this
    );

    this.state = {
      popupVisible: false,
      show: false,
      background: "#296091",
      open: false,
      sidebarClose: true,
      values: [],
      fields: {},
      errors: {},
      txtPluginName:''
    };
  }

  componentDidMount() {
    document.getElementById("mySidenav").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
  }
  SideNavBarcloseClick = () => {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  };
  SideNvaBaropenClick = () => {
    if (!this.state.sidebarClose) {
      this.setState({ sidebarClose: true });
      document.getElementById("mySidenav").style.width = "200px";
      document.getElementById("main").style.marginLeft = "200px";
    } else {
      this.setState({ sidebarClose: false });
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
    }
  };

  handleChangeComplete = color => {
    this.setState({ background: color.hex });
  };

  handleClick = () => {
    if (!this.state.popupVisible) {
      // attach/remove event handler
      document.addEventListener("click", this.handleOutsideClick, false);
    } else {
      document.removeEventListener("click", this.handleOutsideClick, false);
    }

    this.setState(prevState => ({
      popupVisible: !prevState.popupVisible
    }));
  };

  handleOutsideClick = e => {
    // ignore clicks on the component itself
    if (this.node.contains(e.target)) {
      return;
    }

    this.handleClick();
  };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  }
  submituserRegistrationForm(e) {
    console.log("e");
    const config = {
      headers: {
        "content-type": "application/json"
      }
    };
    const formData = new FormData();
    formData.append("FileName", "surendra");
    axios.post('http://localhost:9002/uninstallapp', {
      pluginName: this.state.txtPluginName,
      lastName: 'Williams'
    }).then(response => {
      console.log('response', response);
    }).catch(error => {});
    // axios
    //   .post("http://localhost:9002/uninstallapp", formData, config)
    //   .then(response => {
    //     alert("The file is successfully uploaded");
    //   })
    //   .catch(error => {});
    // e.preventDefault();
    // if (this.validateForm()) {
    //   let fields = {};
    //   console.log("----fields", fields);
    //   fields["FirstName"] = "";
    //   fields["UserName"] = "";
    //   fields["password"] = "";
    //   fields["address"] = "";
    //   this.setState({ fields: fields });
    //   alert("Form submitted");

    //   // axios
    //   // .post("http://localhost:9002/uninstall", formData, config)
    //   // .then(response => {
    //   //   alert("The file is successfully uploaded");
    //   // })
    //   // .catch(error => {});
    // }
  }
  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
    console.log("----fields", fields);
    
    if (!fields["FirstName"]) {
      formIsValid = false;
      errors["FirstName"] = "*Please enter your first name.";
    }

    if (typeof fields["FirstName"] !== "undefined") {
      if (!fields["FirstName"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["FirstName"] = "*Please enter alphabet characters only.";
      }
    }

    if (!fields["address"]) {
      formIsValid = false;
      errors["address"] = "*Please enter your address.";
    }

    if (typeof fields["address"] !== "undefined") {
      //regular expression for address validation
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(fields["address"])) {
        formIsValid = false;
        errors["address"] = "*Please enter valid address.";
      }
    }

    
    this.setState({
      errors: errors
    });
    return formIsValid;
  }

  render() {
    const BASE_URL = "#";
    const { open } = this.state;
    const styleBack = {
      backgroundColor: this.state.background,
      height: "60px"
    };
    const styleBack1 = {
      backgroundColor: this.state.background
    };
    console.log('this.state.txtPluginName', this.state.txtPluginName);
    return (
      <div>
        <div className="container-fluid">
          {/* <PageHeader headerColor={this.state.background}/> */}
          <div className="row Header" style={styleBack1}>
            <div className="col-md-2">
              <div className="logo" style={styleBack}>
                {" "}
                <a href={BASE_URL}>
                  <img
                    className="img-fluid logopdng"
                    src="../src/images/logo.png"
                    alt="logo"
                  ></img>
                </a>
              </div>
            </div>
            <div className="col-md-8"></div>
            <div className="col-md-1">
              <div
                className="popover-container"
                ref={node => {
                  this.node = node;
                }}
              >
                <button
                  className="btn btn-outline-light"
                  onClick={this.handleClick}
                >
                  Change Color Theme
                </button>
                {this.state.popupVisible && (
                  <div className="popover">
                    <SketchPicker
                      color={this.state.background}
                      onChangeComplete={this.handleChangeComplete}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-1 logouticon">
              <a href={BASE_URL}>
                <span className="glyphicon glyphicon-log-out"></span>
              </a>
            </div>
          </div>
          <div>
            <Sidebarmenu sidebarCloseProp={this.state.sidebarClose} />
            <div id="main">
              <div className="row sidebarhdr">
                <div className="col-md-12">
                  <div className="row">
                    <div class="navbar-header">
                      <a
                        class="navbar-minimalize minimalize-styl-2 btn btn-primary navbaralign"
                        onClick={this.SideNvaBaropenClick}
                      >
                        <i class="fa fa-bars"></i>{" "}
                      </a>
                    </div>
                    <h3>
                      <span className="toppdng">Uninstall </span>
                    </h3>
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <div className="col-md-2"></div>
                <div className="col-md-4 innercontent">
                  <div className="form-group formrgn1">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <span
                          className="fa fa-user facolor"
                          aria-hidden="true"
                        />
                      </span>
                      <input
                        type="text"
                        name="FirstName"
                        className="form-control"
                        placeholder="Plugin Name"
                        value={this.state.txtPluginName}
                        onChange={(plugval) => this.setState({txtPluginName: plugval.target.value})}
                      />
                    </div>
                    <div className="errorMsg">
                      {this.state.errors.FirstName}
                    </div>
                    <div></div>
                  </div>
                  <div className="form-group formrgn1">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <span
                          className="fa fa-address-card facolor"
                          aria-hidden="true"
                        />
                      </span>
                      <textarea
                        className="form-control"
                        placeholder="Address"
                        rows="4"
                        cols="50"
                        value={this.state.fields.address}
                        onChange={this.handleChange}
                      ></textarea>
                      <div className="errorMsg">
                        {this.state.errors.address}
                      </div>
                    </div>
                  </div>
                  <div className="form-group text-center">
                    <button
                      type="submit"
                      className="btn btn-lg btn-primary btn-block mb-1 btnshadow"
                      onClick={this.submituserRegistrationForm}
                    >
                      SUBMIT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <PageFooter footerColor={this.state.background} />
        </div>
      </div>
    );
  }
}

export default UninstallScreen;

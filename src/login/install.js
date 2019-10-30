import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Accordion, Card } from "react-bootstrap";
import { SketchPicker } from "react-color";
import Multiselect from "multiselect-dropdown-react";
import { PageHeader, PageFooter } from "./header";
import Sidebarmenu from "./sidebar";
import axios from 'axios'
// import PageFooter from './footer';
// import '../App.css';
import "../styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

//----------------------Select Data --------------//
const data = [
  {
    name: "one",
    value: "one"
  },
  {
    name: "two",
    value: "two"
  },
  {
    name: "three",
    value: "three"
  },
  {
    name: "four",
    value: "four"
  },
  {
    name: "five",
    value: "five"
  },
  {
    name: "six",
    value: "six"
  }
];

class InstallScreen extends Component {
  result(params) {
    console.log(params);
  }

  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(
      this
    );
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      popupVisible: false,
      show: false,
      background: "#296091",
      open: false,
      sidebarClose: true,
      values: [],
      fields: {},
      errors: {},
      name: "",
      selected: [],
      description: "",
      file: undefined
      // colorCode:''
    };
  }
  //----------------------Side Bar --------------//

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

  //-----------------Form validate------------//
  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  }
  submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      let fields = {};
      fields["FirstName"] = "";
      fields["UserName"] = "";
      fields["password"] = "";
      fields["address"] = "";
      this.setState({ fields: fields });
      alert("Form submitted");
    }
  }
  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

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

    if (!fields["SearchData"]) {
      formIsValid = false;
      errors["SearchData"] = "*Please Select Data.";
    }

    if (typeof fields["SearchData"] !== "undefined") {
      if (!fields["SearchData"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["SearchData"] = "*Please Select Data.";
      }
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (typeof fields["password"] !== "undefined") {
      if (
        !fields["password"].match(
          /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/
        )
      ) {
        formIsValid = false;
        errors["password"] = "*Please enter secure and strong password.";
      }
    }
    if (!fields["address"]) {
      formIsValid = false;
      errors["address"] = "*Please enter your address.";
    }

    if (typeof fields["address"] !== "undefined") {
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
  //-----------------End Form validate------------//

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

  submitForm(e) {
    e.preventDefault();
    // const isValid = this.validate();
    // if (!isValid) {
    //   return;
    // }
    const formData = new FormData();
    formData.append("file", this.state.file);
    formData.append("name", this.state.name);
    // formData.append("description", this.state.description);
    // formData.append("package", "asd");
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };

    axios
      .post("http://localhost:9002/un-zip", formData, config)
      .then(response => {
        alert("The file is successfully uploaded");
      })
      .catch(error => {});
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
    console.log("Background", this.state.background);
    return (
      <div>
        <div className="container-fluid">
          {/* <PageHeader />          */}
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
                      <span className="toppdng">Install </span>
                    </h3>
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <div className="col-md-2"></div>
                <div className="col-md-4 innercontent">
                <form onSubmit={this.submitForm} role="form">
                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12">
                      <div className="form-group">
                        <input type="text" name="name" id="plugin_name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} className="form-control input-sm" placeholder="Plugin Name" />
                      </div>
                    </div>
                  </div>
                  {/* <div className="form-group">
                    <MultiSelect
                      options={options}
                      selected={selected}
                      onSelectedChanged={selected => this.setState({ selected })}
                    />
                  </div> */}
                  <div className="form-group">
                    <textarea name="description" className="form-control" value={this.state.description} onChange={(e) => this.setState({ description: e.target.value })} placeholder="Description"></textarea>
                  </div>
                  <div className="form-group">
                    <input type="file" name="file" onChange={(e) => this.setState({ file: e.target.files[0] })} />
                  </div>
                  <input type="submit" value="Register" className="btn btn-info btn-block" />
                </form>
                  {/* <div className="form-group formrgn1">
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
                        placeholder="File Name"
                        value={this.state.fields.name}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="errorMsg">
                      {this.state.errors.FirstName}
                    </div>
                  </div>
                  <div className="form-group formrgn1">
                    <div className="input-group">
                      <div class="custom-file overflow-hidden rounded-pill mb-1">
                        <input
                          id="customFile"
                          type="file"
                          class="custom-file-input rounded-pill"
                        />
                        <label
                          for="customFile"
                          class="custom-file-label rounded-pill"
                        >
                          Choose file
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-group formrgn1">
                    <div className="input-group">
                      <div className="select_left App">
                        <Multiselect
                          options={data}
                          onSelectOptions={this.result}
                          class="form-control"
                          value={this.state.fields.SearchData}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="select_right">
                        <i
                          className="fa fa-caret-down drparw"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <div className="errorMsg">
                        {this.state.errors.SearchData}
                      </div>
                    </div>
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
                      onClick={this.submitForm}
                    >
                      SUBMIT
                    </button>
                  </div> */}
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

export default InstallScreen;

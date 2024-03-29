import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Accordion, Card } from 'react-bootstrap';
import { SketchPicker } from 'react-color';
import PageHeader from './header';
import Sidebarmenu from './sidebar';
// import '../App.css';
import '../styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Multiselect from 'multiselect-dropdown-react';

const data = [{
  name: 'one',
  value: 'one'
},
{
  name: 'two',
  value: 'two'
},
{
  name: 'three',
  value: 'three'
},
{
  name: 'four',
  value: 'four'
},
{
  name: 'five',
  value: 'five'
},
{
  name: 'six',
  value: 'six'
}];

class InstallScreen extends Component {
  result(params) {
    console.log(params);
  }
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

    this.state = {
      popupVisible: false,
      show: false, background: '#296091',
      open: false,
      sidebarClose: true,
      values: [],
      fields: {},
      errors: {}
    };
    
  }
  handleChange = (event, index, values) => this.setState({ values });

  componentDidMount() {
    document.getElementById("mySidenav").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
  }
  SideNavBarcloseClick = () => {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
  SideNvaBaropenClick = () => {
    if (!this.state.sidebarClose) {
      this.setState({ sidebarClose: true });
      document.getElementById("mySidenav").style.width = "200px";
      document.getElementById("main").style.marginLeft = "200px";
    }
    else {
      this.setState({ sidebarClose: false })
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
    }
  }

  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
  };

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
      if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
        formIsValid = false;
        errors["password"] = "*Please enter secure and strong password.";
      }
    }
    if (!fields["address"]) {
      formIsValid = false;
      errors["address"] = "*Please enter your address.";
    }

    if (typeof fields["address"] !== "undefined") {
      //regular expression for address validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
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

  render() {
    const { values } = this.state;
    const BASE_URL = '#'
    const { open } = this.state;
    const styleBack = {
      backgroundColor: this.state.background,
      height: '60px'
    }
    const styleBack1 = {
      backgroundColor: this.state.background
    }
    return (
      <div>
        <div className="container-fluid">
          {/* <PageHeader headerColor={this.state.background}/> */}
          <div className="row Header" style={styleBack1}>
            <div className="col-md-2">
              <div className="logo" style={styleBack}> <a href={BASE_URL}><img className="img-fluid logopdng" src="../images/logo.png" alt="logo"></img></a></div>
            </div>
            <div className="col-md-8"></div>
            <div className="col-md-1">
              <div className="popover-container"
                ref={node => {
                  this.node = node;
                }}
              >
                <button className="btn btn-outline-light" onClick={this.handleClick}>Change Color Theme</button>
                {this.state.popupVisible && (
                  <div className="popover">
                    <SketchPicker color={this.state.background} onChangeComplete={this.handleChangeComplete} />
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
          <div className="row">
            <div className="">
              <Sidebarmenu sidebarCloseProp={this.state.sidebarClose} />
              <div id="main">
              <div className="sidebarhdr">
                <div class="navbar-header">
                  <a class="navbar-minimalize minimalize-styl-2 btn btn-primary navbaralign" onClick={this.SideNvaBaropenClick}>
                    <i class="fa fa-bars"></i> </a>
                </div>
                <h3><span className="toppdng">Install </span></h3>
              </div>
               
              </div>

            </div>
          </div>
          <div className="row">
            <div className="col-md-12 Footer" style={styleBack1}>Copyright © 2019 YooFoo All Rights Reserved</div>
          </div>
        </div>

      </div >
    )
  }
}

export default InstallScreen;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import HomeHeaderscreen from "./homeheader";
import PageFooter from "./footer";
// import '../App.css';
import "../styles/styles.css";
import "../styles/login.css";
// import { link } from 'fs';
// const axios = require('axios');

class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(
      this
    );
  }
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
      console.log("Fields Message", fields);
      fields["UserName"] = "";
      fields["password"] = "";
      this.setState({ fields: fields });

      //   var jsonData = {
      //     "ApiAuthentication":
      //     {
      //       "LoginName": "chalkapi",
      //       "Password": "5PhHK339B76k2eM8",
      //       "Company": "chalkcouture"
      //     },
      //     "AuthenticateCustomerRequest":
      //     {
      //       "LoginName": this.state.fields.UserName,
      //       "Password": this.state.fields.password
      //     }
      //   }
      //  debugger;
      //   // Optionally the request above could also be done as
      //   axios.post('http://localhost:3000/authenticate', {
      //       data: jsonData
      //   })
      //     .then(function (response) {
      //       if(response.data.Message.Result !==undefined && response.data.Message.Result[0].Status==="Success")
      //       {
      //         //this.props.history.push('/dashboard');
      //         window.location='/dashboard';
      //       }
      //       else{
      //         console.log(response.data.Message);
      //       }

      //     })
      //     .catch(function (error) {
      //       console.log(error);
      //     })
      //     .then(function () {
      //       // always executed
      //     });

      this.props.history.push('/dashboard');
      // alert("Form submitted");
    }
  }
  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["UserName"]) {
      formIsValid = false;
      errors["UserName"] = "*Please enter your user name.";
    }

    if (typeof fields["UserName"] !== "undefined") {
      if (!fields["UserName"].match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        formIsValid = false;
        errors["UserName"] = "*Please enter alphabet characters only.";
      }
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    // if (typeof fields["password"] !== "undefined") {
    //   if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
    //     formIsValid = false;
    //     errors["password"] = "*Please enter secure and strong password.";
    //   }
    // }
    console.log("Error Message", this.state.errors, "-----------", errors);
    this.setState({
      errors: errors
    });
    return formIsValid;
  }

  // btnLoginClick = () => {
  //   submituserRegistrationForm = () => {
  //   console.log('Wsadas')
  //   // return  <Link to="/#/register/" />
  //   this.props.history.push('/dashboard');
  // }
  render() {
    const BASE_URL = "#";
    return (
      <div>
        <div className="container-fluid">
          <HomeHeaderscreen />
          <div className="row Loginvbg container-login100">
            <div className="col-sm-2"></div>
            <div className="col-sm-4">
              <div className="wrap-login100 p-l-55 p-r-55 p-t-25 p-b-25">
                <form className="login100-form validate-form">
                  <span className="login100-form-title p-b-49">Login</span>
                  <div className="wrap-input100 validate-input">
                    <span className="label-input100">Username</span>
                    <input
                      className="input100"
                      type="text"
                      name="UserName"
                      placeholder="Type your username"
                      value={this.state.fields.UserName}
                      onChange={this.handleChange}
                    />
                    <span className="focus-input100">
                      <i className="far fa-user fa_icon"></i>
                    </span>
                  </div>
                  <div className="errorMsg">{this.state.errors.UserName}</div>
                  <div className="wrap-input100 validate-input m-t-20">
                    <span className="label-input100">Password</span>
                    <input
                      className="input100"
                      type="password"
                      name="password"
                      placeholder="Type your password"
                      value={this.state.fields.password}
                      onChange={this.handleChange}
                    />
                    <span
                      className="focus-input100"
                      data-symbol="&#xf190;"
                    ></span>
                  </div>
                  <div className="errorMsg">{this.state.errors.password}</div>
                  <div className="container-login100-form-btn">
                    <div className="wrap-login100-form-btn">
                      <div className="login100-form-bgbtn"></div>
                      <button className="login100-form-btn" onClick={this.submituserRegistrationForm}>
                        Login
						        	</button>
                    </div>
                  </div>                  

                  <div className="text-right p-t-8 p-b-31">
                    {/* <Link className="btn btn-link"> */}
                      Forgot password?
                    {/* </Link> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
          <PageFooter />
        </div>
      </div>
    );
  }
}

export default LoginScreen;

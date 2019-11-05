import React, { Component } from "react";
import { Button, Accordion, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Sidebarmenu extends Component {
  state = {
    userType:'Admin'
  }
  componentDidMount() {
    const getUserType = localStorage.getItem("userType");
    this.setState({userType: getUserType});
  }
  // componentDidMount() {
  //     document.getElementById("mySidenav").style.width = "200px";
  //     document.getElementById("main").style.marginLeft = "200px";
  //   }
  //   SideNavBarcloseClick = () =>{
  //     document.getElementById("mySidenav").style.width = "0";
  //     document.getElementById("main").style.marginLeft= "0";
  //   }
  //   SideNvaBaropenClick = () =>{
  //     document.getElementById("mySidenav").style.width = "200px";
  //     document.getElementById("main").style.marginLeft = "200px";
  //   }

  render() {
    const BASE_URL = "#";
    console.log("Props", this.props.sidebarCloseProp);
    return (
      <div>
        <div className="col-sm-2 leftmenu" id="mySidenav" className="sidenav">
          <div>
            <Accordion defaultActiveKey="0">
            {this.state.userType === 'Admin' ? <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  Plugins{" "}
                  <i
                    className="fa fa-angle-down dwnarrow"
                    aria-hidden="true"
                  ></i>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <div className="leftnavlinks">
                      <ul>
                        <li>
                          <i
                            className="fa fa-caret-right rightarrow"
                            aria-hidden="true"
                          ></i>{" "}
                          <Link to="/install">Install</Link>
                        </li>
                        <li>
                          <i
                            className="fa fa-caret-right rightarrow"
                            aria-hidden="true"
                          ></i>{" "}
                          <Link to="/uninstall"> Uninstall </Link>
                        </li>
                      </ul>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card> : ''}
              
            





<Card>
                          <Accordion.Toggle as={Card.Header} eventKey="3">
                            Comission <i className="fa fa-angle-down dwnarrow" aria-hidden="true"></i>
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="3">
                            <Card.Body>
                              <div className="leftnavlinks">
                                <ul>
                                  <input type="hidden" id="3" />
                                  <li><i className="fa fa-caret-right rightarrow" aria-hidden="true"></i> <Link to="/comission-screen">CommissionsScreen</Link></li>
<li><i className="fa fa-caret-right rightarrow" aria-hidden="true"></i> <Link to="/rank-screen">RankScreen</Link></li>
                                </ul>
                              </div>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
<Card>
                          <Accordion.Toggle as={Card.Header} eventKey="3">
                            Admin <i className="fa fa-angle-down dwnarrow" aria-hidden="true"></i>
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="3">
                            <Card.Body>
                              <div className="leftnavlinks">
                                <ul>
                                  <input type="hidden" id="3" />
                                  <li><i className="fa fa-caret-right rightarrow" aria-hidden="true"></i> <Link to="/comission-screen">AdminScreen</Link></li>
<li><i className="fa fa-caret-right rightarrow" aria-hidden="true"></i> <Link to="/rank-screen">AdminUserScreen</Link></li>
                                </ul>
                              </div>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
</Accordion>
          </div>
        </div>
      </div>
    );
  }
}

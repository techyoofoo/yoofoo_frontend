import React from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import Homescreen from "./home";
import RegisterScreen from "./register";
import LoginScreen from "./login";
import DashboardScreen from "./dashboard";
import Sidebarmenu from "./sidebar";
import InstallScreen from "./install";
import UninstallScreen from "./uninstall";
import ForgotPassword from "./forgotpassword";
import ChangePassword from "./changepassword";
// import RankScreen from "./rank";
import VolumesScreen from "./volumes";
// import '../extract_plugins/comission/manifest.json';
// import data from "../extract_plugins/comission/manifest"
import CommissionsScreen from "../extract_plugins/comission/comission-screen";
import RankScreen from "../extract_plugins/comission/rank-screen";
import AdminScreen from "../extract_plugins/Admin/comission-screen";
import AdminUserScreen from "../extract_plugins/Admin/rank-screen";

export default class Root extends React.Component {
  constructor() {
    super();
    this.state = {
      frameworkInspector: false
    };
  }
  componentWillMount() {
    // console.log('Welcome to Manifest');
    // const socialMediaList = data.version_no;
    // console.log('Welcome to Manifest', socialMediaList, data.menu);
    // this.subscription = showFrameworkObservable.subscribe(newValue => this.setState({frameworkInspector: newValue}));
  }
  render() {
    return (
      <HashRouter>
        <div>
          <Route exact path="/" component={Homescreen} />
          <Switch>
            <Route exact path="/login" component={LoginScreen} />
            <Route exact path="/register" component={RegisterScreen} />
            <Route exact path="/login" component={LoginScreen} />
            <Route exact path="/dashboard" component={DashboardScreen} />
            <Route exact path="/sidebar" component={Sidebarmenu} />
            <Route exact path="/install" component={InstallScreen} />
            <Route exact path="/uninstall" component={UninstallScreen} />
            <Route exact path="/forgotpassword" component={ForgotPassword} />
            <Route exact path="/changepassword" component={ChangePassword} />
          </Switch>
          {/* <Switch>
            <Route exact path="/commissions" component={CommissionsScreen} />
          </Switch> */}
          {/* <Route exact path="/commissions"  component={CommissionsScreen} />  */}
          {/* <Route exact path="/rank" component={RankScreen} /> */}
<Route exact path="/comission-screen" component={CommissionsScreen} />
<Route exact path="/rank-screen" component={RankScreen} />
<Route exact path="/comission-screen" component={AdminScreen} />
<Route exact path="/rank-screen" component={AdminUserScreen} />
        </div>
      </HashRouter>
    );
  }
  // componentWillUnmount() {
  //   this.subscription.dispose();
  // }
}

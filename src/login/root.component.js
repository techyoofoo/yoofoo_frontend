import React from 'react';
import { Route, HashRouter } from "react-router-dom";
import Homescreen from './home';
import RegisterScreen from './register';
import LoginScreen from './login';
import DashboardScreen from './dashboard';
import Sidebarmenu from './sidebar';
import InstallScreen from './install';
import UninstallScreen from './uninstall';
import ForgotPassword from './forgotpassword';
import ChangePassword from './changepassword';
import CommissionsScreen from './commissions';
import RankScreen from './rank';
import VolumesScreen from './volumes';

export default class Root extends React.Component {
  constructor() {
    super();
    this.state = {
      frameworkInspector: false,
    };
  }
  componentWillMount() {
    // this.subscription = showFrameworkObservable.subscribe(newValue => this.setState({frameworkInspector: newValue}));
  }
  render() {
    return (
      <HashRouter>
          <div>
            <Route exact path="/" component={Homescreen} />
            <Route exact path="/login" component={LoginScreen} /> 
            <Route exact path="/register" component={RegisterScreen} />
            <Route exact path="/login" component={LoginScreen} /> 
            <Route exact path="/dashboard" component={DashboardScreen} />
            <Route exact path="/sidebar" component={Sidebarmenu} /> 
            <Route exact path="/install" component={InstallScreen} /> 
            <Route exact path="/uninstall" component={UninstallScreen} /> 
            <Route exact path="/forgotpassword" component={ForgotPassword} /> 
            <Route exact path="/changepassword"  component={ChangePassword} /> 
            <Route exact path="/commissions"  component={CommissionsScreen} /> 
            <Route exact path="/rank"  component={RankScreen} /> 
            <Route exact path="/volumes"  component={VolumesScreen} />
                             
          </div>
        </HashRouter>
    );
  }
  // componentWillUnmount() {
  //   this.subscription.dispose();
  // }
}
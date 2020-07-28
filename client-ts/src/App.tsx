import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar";
// import Drawer from "./components/Drawer";
import LandingPage from "./containers/LandingPage";
import Dashboard from "./containers/Dashboard";
// import LoginForm from "./components/LoginForm";
import AuthProvider from "./context/AuthContext";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <div className="main-wrapper">
            {/* <LoginForm /> */}
            <Sidebar />
            {/* <Drawer /> */}
            <div className="content-wrapper">
              <Route path="/" exact component={LandingPage} />
              <Route path="/dashboard" component={Dashboard} />
            </div>
          </div>
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;

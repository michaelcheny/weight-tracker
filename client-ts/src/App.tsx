import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import LandingPage from "./containers/LandingPage";
import Dashboard from "./containers/Dashboard";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <div className="main-wrapper">
          <Sidebar />
          <div className="wrapper">
            <Route path="/" exact component={LandingPage} />
            <Route path="/dashboard" component={Dashboard} />
          </div>
        </div>
      </Switch>
    </Router>
  );
};

export default App;

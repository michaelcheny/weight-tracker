import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import LandingPage from './containers/LandingPage';
import Dashboard from './containers/Dashboard';
import AuthProvider from './context/AuthContext';

import AuthenticatedRoute from './routes/AuthenticatedRoute';
import UnauthenticatedRoute from './routes/UnauthenticatedRoute';
import MealsPage from './containers/MealsPage';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="main-wrapper">
          {/* <LoginForm /> */}
          <Sidebar />
          {/* <Drawer /> */}
          <div className="content-wrapper">
            <Switch>
              <UnauthenticatedRoute path="/" exact component={LandingPage} />
              <AuthenticatedRoute path="/dashboard" component={Dashboard} />
              <AuthenticatedRoute path="/meals" component={MealsPage} />
            </Switch>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;

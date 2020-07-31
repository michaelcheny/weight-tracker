import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import apiActions from "../helpers/apiActions";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import DashboardIcon from "@material-ui/icons/Dashboard";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import HomeIcon from "@material-ui/icons/Home";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

const Sidebar = () => {
  const [loginShow, setLoginShow] = useState<boolean>(false);
  const [signupShow, setSignupShow] = useState<boolean>(false);

  const { authenticated, setAuthenticated, setUser, token, setToken } = useContext(AuthContext);

  return (
    <div className="sidebar">
      {loginShow && <LoginForm showLogin={setLoginShow} />}
      {signupShow && <SignupForm showSignup={setSignupShow} />}

      <ul>
        {authenticated && (
          <Link to="/dashboard" className="link">
            <div>
              <DashboardIcon className="menu-icon" />
              <span className="titles">Dashboard</span>
            </div>
          </Link>
        )}
        {authenticated && (
          <Link to="/meals" className="link">
            <div>
              <FastfoodIcon className="menu-icon" />
              <span className="titles">Meals</span>
            </div>
          </Link>
        )}
        {authenticated && (
          <Link to="/workouts" className="link">
            <div>
              <FitnessCenterIcon className="menu-icon" />
              <span className="titles">Workouts</span>
            </div>
          </Link>
        )}
        {!authenticated && (
          <Link to="/" className="link">
            <div>
              <HomeIcon className="menu-icon" />
              <span className="titles">Home</span>
            </div>
          </Link>
        )}
        {authenticated && (
          <div
            className="link"
            onClick={async () => {
              await apiActions.logOut(token);
              setToken(await apiActions.fetchToken());
              setAuthenticated(false);
              setUser({});
            }}
          >
            <div>
              <ExitToAppIcon className="menu-icon" />
              <span className="titles">Log Out</span>
            </div>
          </div>
        )}
        {!authenticated && (
          <div onClick={() => setLoginShow(true)} className="link">
            <div>
              <MeetingRoomIcon className="menu-icon" />
              <span className="titles">Log In</span>
            </div>
          </div>
        )}
        {!authenticated && (
          <div onClick={() => setSignupShow(true)} className="link">
            <div>
              <PersonAddIcon className="menu-icon" />
              <span className="titles">Register</span>
            </div>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;

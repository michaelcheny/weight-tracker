import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import LoginForm from "./LoginForm";
import DashboardIcon from "@material-ui/icons/Dashboard";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import HomeIcon from "@material-ui/icons/Home";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";

const Sidebar = () => {
  const [loginShow, setLoginShow] = useState(false);

  const { authenticated } = useContext(AuthContext);

  return (
    <div className="sidebar">
      {loginShow && <LoginForm showLogin={setLoginShow} />}

      <ul>
        <Link to="/dashboard" className="link">
          <div>
            <DashboardIcon className="menu-icon" />
            <span className="titles">Dashboard</span>
          </div>
        </Link>
        <Link to="/meals" className="link">
          <div>
            <FastfoodIcon className="menu-icon" />
            <span className="titles">Meals</span>
          </div>
        </Link>
        <Link to="/workouts" className="link">
          <div>
            <FitnessCenterIcon className="menu-icon" />
            <span className="titles">Workouts</span>
          </div>
        </Link>
        <Link to="/" className="link">
          <div>
            <HomeIcon className="menu-icon" />
            <span className="titles">Home</span>
          </div>
        </Link>
        <p className="link">
          <div>
            <ExitToAppIcon className="menu-icon" />
            <span className="titles">Log Out</span>
          </div>
        </p>
        {!authenticated && (
          <p onClick={() => setLoginShow(true)} className="link">
            <div>
              <MeetingRoomIcon className="menu-icon" />
              <span className="titles">Log In</span>
            </div>
          </p>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;

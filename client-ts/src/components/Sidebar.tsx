import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";

// type

const Sidebar = () => {
  const [loginShow, setLoginShow] = useState(false);
  return (
    <div className="sidebar">
      {loginShow && <LoginForm showLogin={setLoginShow} />}
      <ul>
        <Link to="/" className="link">
          adsjkfksa
        </Link>
        <Link to="/dashboard" className="link">
          adsjkfksa
        </Link>
        <Link to="/dashboard" className="link">
          adsjkfksa
        </Link>
        <p onClick={() => setLoginShow(true)} className="link">
          Log In
        </p>
      </ul>
    </div>
  );
};

export default Sidebar;

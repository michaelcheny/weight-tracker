import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Redirect } from "react-router-dom";

const SettingsPage = () => {
  const { user, authenticated } = useContext(UserContext);
  return (
    <div>
      {!authenticated ? <Redirect to="/login" /> : null}

      <h1>Settings for {user.first_name}</h1>

      <p style={{ textDecoration: "underline" }}>Email</p>
      <p>{user.email}</p>
    </div>
  );
};

export default SettingsPage;

import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Redirect } from "react-router-dom";

const DashboardPage = () => {
  const { user, authenticated, token } = useContext(UserContext);

  return (
    <>
      <h1>Dashboard</h1>
      <pre>
        {!authenticated ? <Redirect to="/login" /> : null}
        {JSON.stringify(useContext(UserContext), null, 2)}
      </pre>
    </>
  );
};

export default DashboardPage;

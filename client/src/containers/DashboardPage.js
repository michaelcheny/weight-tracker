import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Redirect } from "react-router-dom";

const DashboardPage = () => {
  const { user, authenticated, token } = useContext(UserContext);

  return (
    <pre>
      {!authenticated ? <Redirect to="/login" /> : null}
      {JSON.stringify(useContext(UserContext), null, 2)}
    </pre>
  );
};

export default DashboardPage;

import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Dashboard = () => {
  const user = useContext(UserContext);
  return <pre>{JSON.stringify(user, null, 2)}</pre>;
};

export default Dashboard;

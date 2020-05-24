import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const HomePage = () => {
  const user = useContext(AuthContext);
  return <pre>{JSON.stringify(user, null, 2)}</pre>;
};

export default HomePage;

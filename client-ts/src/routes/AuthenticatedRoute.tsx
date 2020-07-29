import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Redirect, Route, RouteProps } from "react-router-dom";

const RouteAuthenticated = ({ component: Component, path }: RouteProps) => {
  const { authenticated } = useContext(AuthContext);

  if (!authenticated) {
    return <Redirect to="/" />;
  }

  return <Route component={Component} path={path} />;
};

export default RouteAuthenticated;

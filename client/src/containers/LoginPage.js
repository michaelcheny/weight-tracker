import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { logIn, fetchToken } from "../actions/userActions";
import ErrorMessages from "../components/ErrorMessages";
import { Redirect } from "react-router-dom";

const LoginPage = () => {
  const { setUser, token, setToken, authenticated, setAuthenticated } = useContext(
    UserContext
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);

  useEffect(() => {
    fetchToken().then((token) => setToken(token));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    logIn(token, email, password).then((data) => {
      if (!Object.keys(data).includes("errors")) {
        setUser(data);
        setAuthenticated(true);
      } else {
        setErrors(true);
        setErrorMessages(data.errors);
      }
    });
  };

  return (
    <div>
      {authenticated ? <Redirect to="/dashboard" /> : null}
      {authenticated}
      <form onSubmit={handleSubmit}>
        {errors ? <ErrorMessages errors={errorMessages} /> : null}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input type="submit" value="Log In" />
      </form>
    </div>
  );
};

export default LoginPage;

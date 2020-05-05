import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { logIn, fetchToken } from "../actions/userActions";
import ErrorMessages from "../components/ErrorMessages";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import useFocus from "styled-components";

// TODO: Incoporate this thing as a Modal from the side nav - click on log in or register to pop up a form
const LoginPage = () => {
  const { setUser, token, setToken, authenticated, setAuthenticated } = useContext(
    UserContext
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);

  // const [inputRef, setInputRef] = useFocus();

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
    <StyledLogin>
      {authenticated ? <Redirect to="/dashboard" /> : null}

      <form onSubmit={handleSubmit}>
        {/* <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          // ref={email}
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        /> */}

        <h3>Log In</h3>

        {errors ? <ErrorMessages errors={errorMessages} /> : null}
        <StyledInput
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          // autoFocus
          required
        />

        <StyledInput
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          // autoFocus
          required
        />

        {/* <input type="submit" value="Log In" /> */}
        <StyledButton onClick={handleSubmit}>Log In</StyledButton>
      </form>
    </StyledLogin>
  );
};

export default LoginPage;

const StyledLogin = styled.div`
  border: 3px solid #f1f1f1;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
`;

const StyledButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
`;

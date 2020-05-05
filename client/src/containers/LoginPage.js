import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { logIn, fetchToken } from "../actions/userActions";
import ErrorMessages from "../components/ErrorMessages";
import { Redirect } from "react-router-dom";
import { StyledDiv, StyledInput, StyledButton } from "../styles/Forms";

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
    <StyledDiv>
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
          required
        />

        <StyledInput
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />

        {/* <input type="submit" value="Log In" /> */}
        <StyledButton onClick={handleSubmit}>Log In</StyledButton>
      </form>
    </StyledDiv>
  );
};

export default LoginPage;

import React, { useState, useContext } from "react";
import userActions from "../actions/userActions";
// import { UserContext } from "../context/UserContext";
import { AuthContext } from "../context/AuthContext";
import ErrorMessages from "../components/ErrorMessages";
import { Redirect } from "react-router-dom";
import { StyledDiv, StyledInput, StyledButton } from "../styles/Forms";

const RegistrationPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errors, setErrors] = useState(false);
  const [errorMsgs, setErrorMsgs] = useState([]);

  const { token, setUser, authenticated, setAuthenticated } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newUser = {
      email,
      password,
      password_confirmation: passwordConfirmation,
      first_name: firstName,
      last_name: lastName,
    };
    const data = await userActions.register(token, newUser);
    if (!Object.keys(data).includes("errors")) {
      setUser(data);
      setAuthenticated(true);
    } else {
      setErrors(true);
      setErrorMsgs(data.errors);
    }
  };

  return (
    <>
      <h3>Registration</h3>
      {errors ? <ErrorMessages errors={errorMsgs} /> : null}
      {authenticated ? <Redirect to="/dashboard" /> : null}

      <StyledDiv>
        <form onSubmit={handleSubmit}>
          {/* render error stuff here */}
          <StyledInput
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Email"
            required
          />
          <StyledInput
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            required
          />
          <StyledInput
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            required
          />
          <StyledInput
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
            required
          />
          <StyledInput
            type="password"
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            value={passwordConfirmation}
            placeholder="Confirm Password"
            onKeyPress={(event) => (event.keyCode === 13 ? handleSubmit : null)}
            required
          />
          {/* <input type="submit" /> */}
          <StyledButton onClick={handleSubmit}>Register</StyledButton>
        </form>
      </StyledDiv>
    </>
  );
};

export default RegistrationPage;

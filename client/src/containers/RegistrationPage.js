import React, { useState, useContext } from "react";
import { register } from "../actions/userActions";
import { UserContext } from "../context/UserContext";
import ErrorMessages from "../components/ErrorMessages";
import { Redirect } from "react-router-dom";

const RegistrationPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errors, setErrors] = useState(false);
  const [errorMsgs, setErrorMsgs] = useState([]);

  const { token, setUser, authenticated, setAuthenticated } = useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log();
    const newUser = {
      email,
      password,
      password_confirmation: passwordConfirmation,
      first_name: firstName,
      last_name: lastName,
    };
    const data = await register(token, newUser);
    console.log(data);
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
      {authenticated ? <Redirect to="/dashboard" /> : null}

      <form onSubmit={handleSubmit}>
        {/* render error stuff here */}
        {errors ? <ErrorMessages errors={errorMsgs} /> : null}
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Email"
          required
        />
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
          required
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
          required
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Password"
          required
        />
        <input
          type="password"
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          value={passwordConfirmation}
          placeholder="Confirm Password"
          required
        />
        <input type="submit" />
      </form>
    </>
  );
};

export default RegistrationPage;

import React, { useState } from "react";

const RegistrationPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log();
    const newUser = {
      email,
      password,
      password_confirmation: passwordConfirmation,
      firstName,
      lastName,
    };
    console.log(newUser);
  };

  return (
    <form onSubmit={handleSubmit}>
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
  );
};

export default RegistrationPage;

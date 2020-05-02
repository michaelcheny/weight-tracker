import React, { useState } from "react";

const RegistrationPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
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
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={email}
        placeholder="Password"
        required
      />
      <input type="email" />
      <input type="email" />
      <input type="submit" />
    </form>
  );
};

export default RegistrationPage;

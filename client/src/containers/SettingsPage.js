import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Redirect } from "react-router-dom";

const SettingsPage = () => {
  const { user, setUser, authenticated, token } = useContext(UserContext);
  const [email, setEmail] = useState("");

  // useEffect(() => {
  //   // setUserInfo(user);
  //   const fetchUserData = async (token) => {
  //     const res = await fetch("http://localhost:3001/v1/current_user", {
  //       "X-CSRF-TOKEN": token,
  //       credentials: "include",
  //     });
  //     const data = await res.json();
  //     setUserInfo(data);
  //   };
  //   fetchUserData();
  // });

  // ONCE CLICKED BUTTON TO CHANGE EMAIL, SETEMAIL TO BE user.email AND POP UP MODAL WITH FORM

  return (
    <div>
      {!authenticated ? <Redirect to="/login" /> : null}

      <h1>Settings for {user.first_name}</h1>
      <form>
        <input
          type="email"
          value={email}
          onClick={() => setEmail(user.email)}
          // onChange={(e) => setEmail()}
        />
      </form>

      <p style={{ textDecoration: "underline" }}>Email</p>
      <p>{user.email}</p>
      <pre>{JSON.stringify(useContext(UserContext), null, 2)}</pre>
    </div>
  );
};

export default SettingsPage;

import React, { createContext, useState, useEffect } from "react";
import userActions from "../actions/userActions";

export const AuthContext = createContext();

export default ({ children }) => {
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  // const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    userActions.fetchToken().then((token) => {
      setToken(token);
      fetch("/auto-login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-CSRF-TOKEN": token,
        },
        credentials: "include",
      })
        .then((res) => res.json())
        .then((data) => {
          if (!Object.keys(data).includes("errors")) {
            console.log(data);
            // console.log(data);
            // if (!data.length === 0) {
            setUser(data);
            setAuthenticated(true);
            // setIsLoaded(true);
            // }
          }
        });
    });
  }, []);

  return (
    <>
      {/* {isLoaded ? (
        <h1>Loading...</h1>
      ) : ( */}
      <AuthContext.Provider
        value={{
          user,
          setUser,
          token,
          setToken,
          authenticated,
          setAuthenticated,
        }}
      >
        {children}
      </AuthContext.Provider>
      {/* )}
      } */}
    </>
  );
};

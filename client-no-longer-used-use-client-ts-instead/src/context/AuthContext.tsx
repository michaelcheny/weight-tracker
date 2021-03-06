import React, { createContext, useState, useEffect } from "react";
import userActions from "../actions/userActions";

export const AuthContext: any = createContext({});

export default ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<object>({});
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

            setUser(data);
            setAuthenticated(true);
          }
        });
    });
  }, []);

  return (
    <>
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
    </>
  );
};

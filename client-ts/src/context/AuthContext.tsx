import React, { createContext, useState, useEffect } from "react";
import apiActions from "../helpers/apiActions";

// interface Auth {
//   user?: Object | null;
//   setUser?: React.SetStateAction<Object> | null;
//   token?: string | undefined;
//   setToken?: React.SetStateAction<string> ;
//   authenticated?: Boolean | null;
//   setAuthenticated?: React.SetStateAction<Boolean> | null;
// }

export const AuthContext = createContext<any>({});
// export const AuthContext = createContext<Auth>({});

export default ({ children }: { children: any }) => {
  const [user, setUser] = useState<object | undefined>({});
  const [token, setToken] = useState<string | undefined>("");
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    apiActions.fetchToken().then((token) => {
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
  );
};

// export default AuthContext

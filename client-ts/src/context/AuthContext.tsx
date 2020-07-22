import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({});

export default ({ children }: { children: any }) => {
  const [user, setUser] = useState<object>({});
  const [token, setToken] = useState<string>("");
  const [authenticated, setAuthenticated] = useState<boolean>(false);

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

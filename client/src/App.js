import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import HomePage from "./containers/HomePage";
// import LoginPage from "./containers/LoginPage";
import ProfilePage from "./containers/ProfilePage";
import Dashboard from "./containers/Dashboard";
import SideBar from "./components/SideBar";

function App() {
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");

  const fetchToken = async () => {
    const res = await fetch("http://localhost:3001/auth-check", {
      credentials: "include",
    });
    const data = await res.json();
    setToken(data.csrf_auth_token);
    return data.csrf_auth_token;
  };

  useEffect(() => {
    fetchToken().then((token) => {
      fetch("http://localhost:3001/auto-login", {
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
          setUser(data);
          console.log(data);
        });
    });
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        authenticated: !Object.keys(user).includes("errors"),
      }}
    >
      <div className="App">
        <Router>
          <SideBar theme="#282A36" />
          <Switch>
            <main>
              <Route path="/" exact component={HomePage} />
              <Route path="/profile" component={ProfilePage} />
              <Route path="/dashboard" component={Dashboard} />
            </main>
          </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
